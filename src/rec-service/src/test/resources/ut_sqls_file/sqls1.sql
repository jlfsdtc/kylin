--
-- Copyright (C) 2020 Kyligence Inc. All rights reserved.
--
-- http://kyligence.io
--
-- This software is the confidential and proprietary information of
-- Kyligence Inc. ("Confidential Information"). You shall not disclose
-- such Confidential Information and shall use it only in accordance
-- with the terms of the license agreement you entered into with
-- Kyligence Inc.
--
-- THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
-- "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
-- LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
-- A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
-- OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
-- SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
-- LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
-- DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
-- THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
-- (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
-- OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
--
-- grammar invalid sqls
SELECT {fn DAYOFMONTH({fn CURRENT_DATE() }) } Calculation_330451678684426242 FROM "DEFAULT".KYLIN_ACCOUNT KYLIN_ACCOUNT LIMIT 500;
SELECT PART_DT, SUM(PRICE) FROM (SELECT * FROM KYLIN_SALES WHERE PART_DT = DATE '2010-01-01') CB_VIEW WHERE LSTG_FORMAT_NAME IN ('A') AND OPS_USER_ID IN ('A') AND OPS_REGION IN ('A') GROUP BY PART_DT LIMIT 500;
SELECT PART_DT, SUM(PRICE) FROM (SELECT * FROM KYLIN_SALES WHERE PART_DT = DATE '2010-01-01') CB_VIEW WHERE LSTG_FORMAT_NAME IN ('A') AND OPS_USER_ID IN ('A') AND OPS_REGION IN ('A') AND LSTG_FORMAT_NAME IN ('A') AND OPS_REGION IN ('A') AND OPS_USER_ID IN ('A') GROUP BY PART_DT LIMIT 500;
SELECT SELLER_ID FROM KYLIN_SALES WHERE SELLER_ID NOT IN (1) GROUP BY SELLER_ID HAVING SELLER_ID NOT IN (1) LIMIT 500;
SELECT TRANS_ID, SUM(PRICE) FROM KYLIN_SALES WHERE PART_DT = '2010-01-01' GROUP BY TRANS_ID LIMIT 500;
SELECT COUNT(DISTINCT KYLIN_SALES.PART_DT) FROM KYLIN_SALES KYLIN_SALES INNER JOIN KYLIN_CAL_DT KYLIN_CAL_DT ON KYLIN_SALES.PART_DT = KYLIN_CAL_DT.CAL_DT INNER JOIN KYLIN_CATEGORY_GROUPINGS KYLIN_CATEGORY_GROUPINGS ON KYLIN_SALES.LEAF_CATEG_ID = KYLIN_CATEGORY_GROUPINGS.LEAF_CATEG_ID AND KYLIN_SALES.LSTG_SITE_ID = KYLIN_CATEGORY_GROUPINGS.SITE_ID LIMIT 500;

-- grammar valid sqls
SELECT CAL_DT, LSTG_FORMAT_NAME, SUM(PRICE) FROM TEST_KYLIN_FACT WHERE CAL_DT = '2012-01-02' GROUP BY CAL_DT, LSTG_FORMAT_NAME;
SELECT CAL_DT, SUM(PRICE) FROM TEST_KYLIN_FACT WHERE CAL_DT = '2012-01-02' GROUP BY CAL_DT;