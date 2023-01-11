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
    incrementalLoading: 'Incremental Load',
    refreshData: 'Refresh Data',
    refreshRange: 'Refresh Range',
    refreshRangeDesc: 'The refreshing range should not exceed the loaded data range. If the range cross over several segments, the system will notify you of the refreshing workload.',
    dataMerge: 'Merge Data',
    loadingRange: 'Loading Range',
    dataRange: 'Data Range',
    partitionColumn: 'Partition Column',
    refreshTitle: 'Refresh Range',
    refreshContent1: 'You\'re going to refresh the table {tableName}. The size of the impacted data would be {storageSize}.',
    refreshContent2: 'Are you sure you want to submit the refresh job?',
    HALF_MINUTE: '30 seconds',
    FIVE_MINUTE: '5 minutes',
    TEN_MINUTE: '10 minutes',
    HALF_HOUR: 'Half an hour',
    HOUR: 'One hour',
    SIX_HOUR: '6 hours',
    HALF_DAY: 'Half a day',
    DAY: 'One day',
    WEEK: 'One week',
    MONTH: 'One month',
    QUARTER: 'One quarter',
    YEAR: 'One year',
    isMergeable: 'Do you want to enable auto-merge?',
    mergePreference: 'Merge Preference',
    autoMerge: 'Auto-Merge',
    volatile: 'Volatile Range',
    minute: 'Minute',
    hour: 'Hour',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    pushdownRange: 'Pushdown Range',
    pushdownDesc: 'To keep query result consistent, the source data will be accessible to push-down query only if they are within the data range.',
    isPushdown: 'Sure, pushdown query should be within the data range.',
    notPushdown: 'No, I want to query all source data via pushdown engine.',
    invaildDate: 'Please enter a valid date range.',
    minValueInvaild: 'Start data range has the running jobs, please select the start time before.',
    ON: 'ON',
    OFF: 'OFF',
    refreshRangeTip: 'Reload updated records from the source table.',
    autoMergeTip: 'The system will merge segments automatically to enhance query performance.',
    volatileTip: 'The latest data may change later, the data in the volatile range will not be merged.',
    selectAll: 'Select All',
    partitionFormat: 'Partition Format',
    loadData: 'Load Data',
    loadExistingData: 'Load existing data',
    loadExistingDataDesc: 'Load new records existing from the last load job.',
    customLoadRange: 'Customize Load Range',
    detectAvailableRange: 'Detect available range'
  }
}