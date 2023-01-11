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
export default {
  'en': {
    adminTips: 'Admin user can view all job information via Select All option in the project list.',
    streamingJobsList: 'Streaming Job List',
    jobStart: 'Start',
    jobRestart: 'Restart',
    jobStop: 'Stop',
    refreshList: 'Refresh List',
    pleaseSearch: 'Search Object',
    streamingIngestion: 'Data Ingestion',
    autoMerge: 'Auto-Merge',
    TargetObject: 'Object',
    JobType: 'Type',
    project: 'Project',
    status: 'Status',
    dataDuration: 'Data Latency',
    lastStatusChangeTime: 'Last Status Change Time',
    lastStatusDuration: 'Last Status Duration',
    Actions: 'Actions',
    configurations: 'Configurations',
    START: 'START',
    STARTING: 'STARTING',
    RUNNING: 'RUNNING',
    STOPPING: 'STOPPING',
    STOPPED: 'STOPPED',
    STOP: 'STOP',
    ERROR: 'ERROR',
    clearAll: 'Clear All',
    filteredTotalSize: '{totalSize} result(s)',
    ProgressStatus: 'Status',
    key: 'Key',
    value: 'Value',
    STREAMING_BUILD: 'STREAMING_BUILD',
    STREAMING_MERGE: 'STREAMING_MERGE',
    pleaseInputKey: 'Please enter the key',
    pleaseInputValue: 'Please enter the value',
    dataStatistics: 'Data Statistics',
    jobRecords: 'Job Start and Stop Records',
    noSelectJobs: 'Please select at least one job.',
    recordStatus: 'Status Change Records',
    consumptionRate: 'Consumption Rate',
    dataLatency: 'Data Latency',
    processingTime: 'Processing Time',
    consumptionUnit: 'msg/s',
    latencyUnit: 's',
    processingUnit: 's',
    isNoStatisticsData: 'No Statistics',
    isNoRecords: 'No Records',
    '30m': 'last 30 minutes',
    '1h': 'last 1 hours',
    '6h': 'last 6 hours',
    '12h': 'last 12 hours',
    '1d': 'last 1 day',
    '3d': 'last 3 days',
    '7d': 'last 7 days',
    stopStreamingJobTips: 'Stopping the job(s) may take several minutes. Are you sure you want to stop the job(s)?',
    stopStreamingJobImmeTips: 'Stopping the job immediately, some segments would be in "REFRESHING" or "LOCKED" state. They would be deleted when the job(s) starts again, or you could delete them manually. Are you sure you want to stop the job(s) immediately?',
    stopJob: 'Stop Job',
    stopJobImme: 'Stop Immediately',
    mulParamsKeyTips: 'This key already exists.',
    errorStautsTips: 'An unknown error occurred. Please contact the admin.',
    errorStautsTips2: 'An unknown error occurred. Please download system diagnostic package to view the log or contact the admin.',
    disableStartJobTips: 'Can\'t be used. Please add streaming indexes first.',
    borkenModelDisableStartJobTips: 'Can\'t be used. Model {modelName} is currently broken.',
    noPartitonColumnDisableStartJobTips: 'Can\'t be used. Please specify a timestamp field as the time partition column of this model.',
    logInfoTip: 'Log',
    sparkTaskDetails: 'Spark Info',
    output: 'Output',
    jobDiagnosis: 'Download Job Diagnostic Package'
  }
}