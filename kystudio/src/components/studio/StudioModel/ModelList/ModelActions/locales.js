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
  en: {
    authorityDetails: 'The details of authority',
    iKnow: 'Got it',
    exportTds: 'Export TDS',
    rename: 'Rename',
    delete: 'Delete',
    purge: 'Purge',
    disable: 'Disable',
    enable: 'Enable',
    onLine: 'Online',
    offLine: 'Offline',
    build: 'Build Index',
    buildTitle: 'Build',
    modelName: 'Model',
    changeModelOwner: 'Change Owner',
    modelPartitionSet: 'Model Partition',
    recommendations: 'Recommendation',
    subPartitionValuesManage: 'Manage Sub-Partition Values',
    secStorage: 'Tiered Storage',
    openSecStorageTips: 'The system will create a base table index for model "{modelName}". The index can\'t be deleted when the tiered storage is ON.',
    openSecStorageTips2: 'With the tiered storage ON, the existing data needs to be loaded to tiered storage to take effect. ',
    closeSecStorageTips: 'With this switch OFF, the model\'s tiered storage data will be cleared。',
    secStorageDesc: 'With this switch ON, the basic table index will be synchronized to the tiered storage. It will improve the performance of ad-hoc query and detail query analysis scenarios.',
    disableSecStorageActionTips2: 'The tiered storage can\'t be used because no dimension or measure has been added and the base table index can\'t be added.',
    supportSecStoage: 'Support Tiered Storage',
    node: 'Node',
    exportMetadatas: 'Export Model',
    bokenModelExportTDSTip: 'Can\'t export TDS file at the moment as the model is BROKEN',
    bokenModelExportMetadatasTip: 'Can\'t export model file at the moment as the model is BROKEN',
    buildTips: 'The indexes in this model have not been built and are not ready for serving queries. Please build indexes to optimize query performance.',
    multilParTip: 'This model used multilevel partitioning, which are not supported at the moment. Please set subpartition as \'None\' in model partition dialog, or turn on \'Multilevel Partitioning\' in project settings.',
    change: 'Change',
    changeTo: 'Change Owner To',
    pleaseChangeOwner: 'Please change model owner',
    changeDesc: 'You can change the owner of the model to a system admin, a user in the project ADMIN role, or a user in the project management role.',
    exportTDSContinueBtn: 'Got it',
    exportTDSTitle: 'Export TDS',
    step1: 'Select included columns for dimension and measure',
    step2: 'Select how to connect data source',
    exportTDSOptions1: 'Only include the ones included in aggregate indexes（default）',
    exportTDSOptions2: 'Include the ones in both aggregate indexes and table indexes',
    exportTDSOptions3: 'Include all columns for dimension or measure, even if they are not included in any aggregate or table index',
    connectODBC: 'Other ODBC data sources（default）',
    connectTableau: 'Tableau Kyligence Connector',
    exportTDSOfflineTips: 'The exported TDS file can\'t be used for queries if the model is OFFLINE. Please make sure that the model goes online when using this TDS file.',
    delModelTip: 'Are you sure you want to drop the model {modelName}?',
    delModelTitle: 'Delete Model',
    pergeModelTip: 'Are you sure you want to purge all segments of the model {modelName}?',
    pergeModelTitle: 'Purge Model',
    disableModelSuccessTip: 'Offline the model successfully.',
    enabledModelSuccessTip: 'Online the model successfully.',
    purgeModelSuccessTip: 'Successfully purged the model',
    deleteModelSuccessTip: 'Delete the model successfully.',
    noSegmentOnlineTip: 'This model can\'t go online as it doesn\'t have segments. Models with no segment couldn\'t serve queries. Please add a segment.',
    cannotOnlineTips: 'This model can\'t go online at the moment:',
    disableModelTip: 'The offline model couldn\'t serve queries. The built indexes could still be used after the model is online again. Are you sure you want to offline model "{modelName}"?',
    disableModelTitle: 'Offline Model',
    noIndexTips: 'You should add indexes first before building.',
    changeModelSuccess: 'The owner of model {modelName} has been successfully changed to {owner}.',
    jobSuccess: 'Submitted successfully. You may go to  the job page to ',
    disableActionTips: 'Unavailable for Streaming model',
    disableActionTips2: 'Unavailable for Fusion model and Streaming model',
    disableActionTips3: 'Unavailable for Fusion model',
    disableActionTips4: 'The time partition settings can\'t be modified for fusion model and streaming model. ',
    disableSecStorageActionTips: 'The tiered storage can\'t be used for fusion or streaming models at the moment.',
    forbidenComputedColumnTips: 'The parquet files containing data prior to 1970 cannot be loaded. <a class="ky-a-like" href="https://docs.kyligence.io/books/v4.5/en/Designers-Guide/tiered_storage/" target="_blank">View the manual <i class="el-ksd-icon-spark_link_16"></i></a>',
    disableEditModel: 'Can\'t edit model. Please stop the streaming job and then delete all the streaming segments.'
  }
}