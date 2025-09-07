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
package org.apache.kylin.rest;

import org.apache.kylin.rest.cluster.ClusterManager;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MockClusterManagerTest {
    @Test
    void testCheckServer() {
        ClusterManager clusterManager = new MockClusterManager();

        // Test valid server
        Assertions.assertFalse(clusterManager.checkServer("127.0.0.1:7070"));

        // Test null host
        Assertions.assertTrue(clusterManager.checkServer(null));

        // Test empty host
        Assertions.assertTrue(clusterManager.checkServer(""));
        Assertions.assertTrue(clusterManager.checkServer(" "));

        // Test host not found in servers
        Assertions.assertTrue(clusterManager.checkServer("192.168.1.1:8080"));
    }
}
