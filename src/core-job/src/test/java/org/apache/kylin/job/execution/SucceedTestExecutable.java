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

package org.apache.kylin.job.execution;

import org.apache.kylin.job.exception.ExecuteException;
import org.apache.kylin.job.exception.PersistentException;

import java.util.HashMap;
import java.util.Map;

/**
 */
public class SucceedTestExecutable extends BaseTestExecutable {

    public SucceedTestExecutable() {
        super();
    }

    public SucceedTestExecutable(Object notSetId) {
        super(notSetId);
    }

    @Override
    protected ExecuteResult doWork(ExecutableContext context) throws PersistentException, ExecuteException {
        Map<String, String> info = new HashMap<String, String>() {
            {
                put("runningStatus", "inRunning");
            }
        };
        updateJobOutput(getProject(), getId(), ExecutableState.RUNNING, info, null, null);
        try {
            Thread.sleep(1000);
            this.retry++;
        } catch (InterruptedException e) {
        }
        return ExecuteResult.createSucceed();
    }

    @Override
    public boolean needRetry() {
        return super.needRetry();
    }
}