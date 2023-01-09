#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/7/1 14:06
# @Author  : fuchen'en
# @Description:
from sqlalchemy import create_engine, text

engine = create_engine("sqlite+pysqlite:///:memory:", echo=True, future=True)
with engine.connect() as conn:
    result = conn.execute(text("select 'hello world'"))
    print(result.all())
