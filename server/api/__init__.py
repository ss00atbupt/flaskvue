#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/7/8 18:25
# @Author  : fuchen'en
# @Description:
#初始化页面

from flask import request, jsonify, json, flash, session, render_template
import configparser
import os
import requests
from werkzeug.security import check_password_hash, generate_password_hash
from ..db import get_db


def generate_api(app):
    # 开发环境下，页面由vue决定，生产环境下，页面由flask决定
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        if app.debug:
            # print(requests.get('http://localhost/{}'.format(path)).text)
            return requests.get('http://localhost/{}'.format(path)).text#返回页面
        return render_template("index.html")

    @app.route('/api/config', methods=['get'])
    def get_info():#读数据
        cp = igpconfarser.ConfigParser()
        cur_path = os.getcwd()
        cp.read(cur_path + '/server/cc.cfg')#就是找的这个
        sections = cp.sections()
        response = {
            'code': 0,
            'data': {}
        }
        if len(sections) == 0:
            raise Exception('文件不存在或无内容')
        for section in sections:
            response['data'][section] = {}
            for key in cp[section]:
                response['data'][section][key] = cp.get(section, key)

        return json.dumps(response, ensure_ascii=False)

    @app.route('/api/config', methods=['post'])
    def set_info():#写数据
        req = json.loads(request.data)
        cp = configparser.ConfigParser()
        cur_path = os.getcwd()
        with open(cur_path + '/server/cc.cfg', 'w', encoding='utf-8') as cfg_file:
            for section in req:
                cp.add_section(section)
                for key in req[section]:
                    cp.set(section, key, req[section][key])
            cp.write(cfg_file)

        response = {
            'code': 0,
            'data': req
        }
        return json.dumps(response)

    # @app.route('/api/register', methods=['post'])
    # def register():
    #     username = request.form['username']
    #     password = request.form['password']
    #     db = get_db()
    #     error = None
    #
    #     if not username:
    #         error = 'UserName is required!'
    #     elif not password:
    #         error = 'Password is required!'
    #     elif db.execute('select id from user where username = ?', (username,)).fetchone() is not None:
    #         error = f'User {username} is already registered.'
    #
    #     if error is None:
    #         db.execute(
    #             'insert into user (username, password) values (?, ?)',
    #             (username, generate_password_hash(password))
    #         )
    #         db.commit()
    #         return jsonify(code=0, data='ok')
    #
    #     flash(error)
    #
    #     return jsonify(code=10011, msg=error)

    # @app.route('/api/login', methods=['post', 'get'])
    # def login():
    #     print('login')
    #     username = request.form['username']
    #     password = request.form['password']
    #     db = get_db()
    #     error = None
    #     user = db.execute(
    #         'select * from user where username = ?', (username,)
    #     ).fetchone()
    #
    #     if user is None:
    #         error = 'Incorrect username'
    #     elif not check_password_hash(user['password'], password):
    #         error = 'Incorrect password'
    #
    #     if error is None:
    #         session.clear()
    #         session['user_id'] = user['id']
    #         return jsonify(code=0, data='ok')
    #
    #     flash(error)
    #
    #     return jsonify(code=10012, msg=error)
    #
    # @app.route('/api/users', methods=['get'])
    # def get_user_list():
    #     db = get_db()
    #     try:
    #         user_list = db.execute(
    #             'select * from user'
    #         ).fetchall()
    #         user_wrapper_list = []
    #         for user in user_list:
    #             t_user = {'userName': user['username'], 'password': user['password']}
    #             user_wrapper_list.append(t_user)
    #         return json.dumps({'code': 0, 'data': user_wrapper_list})
    #     except Exception as e:
    #         return json.dumps({'code': 10010, 'msg': e})
