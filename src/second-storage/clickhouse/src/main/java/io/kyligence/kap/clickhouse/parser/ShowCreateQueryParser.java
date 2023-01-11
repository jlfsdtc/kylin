/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.kyligence.kap.clickhouse.parser;

import org.apache.commons.lang3.exception.ExceptionUtils;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.function.Function;

public class ShowCreateQueryParser {
    public static final Function<ResultSet, String> SHOW_CREATE = rs -> {
        try {
            return rs.getString(1);
        } catch (SQLException sqlException) {
            return ExceptionUtils.rethrow(sqlException);
        }
    };
}