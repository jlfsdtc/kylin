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

package org.apache.kylin.common.constant;

public class Constant {
    private Constant() {
        // Just implement
    }

    public static final long SECOND = 1000L;
    public static final long MINUTE = 60 * SECOND;

    public static final int AUDIT_MAX_BUFFER_SIZE = 10 * 1024 * 1024;

    public static final int MODEL_ALIAS_LEN_LIMIT = 127;
}
