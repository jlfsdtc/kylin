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

package org.apache.kylin.metadata.model;

import java.io.Serializable;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * @author xduo
 */
public enum SegmentStatusEnumToDisplay implements Serializable {
    ONLINE, LOCKED, REFRESHING, MERGING, LOADING, WARNING, OVERLAP;

    private static final Map<String, SegmentStatusEnumToDisplay> nameMap = new HashMap<>(9);

    static {
        Arrays.stream(SegmentStatusEnumToDisplay.values()).forEach(value -> nameMap.put(value.toString(), value));
    }

    public static SegmentStatusEnumToDisplay getByName(String name) {
        return nameMap.getOrDefault(name, null);
    }

    public static Set<String> getNames() {
        return nameMap.keySet();
    }
}