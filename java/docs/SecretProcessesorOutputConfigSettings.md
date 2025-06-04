

# SecretProcessesorOutputConfigSettings


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**dataset** | **String** | The name of the BigQuery dataset where the table resides |  [optional] |
|**projectId** | **String** | The Google Cloud Project ID where the BigQuery instance is located |  [optional] |
|**table** | **String** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist Monad will create the table. |  [optional] |
|**ingressAddress** | **String** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. |  [optional] |
|**path** | **String** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. |  [optional] |
|**port** | **String** | The port of the Splunk instance. |  [optional] |
|**authType** | **String** |  |  [optional] |
|**cloudId** | **String** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. |  [optional] |
|**connectionType** | **String** | The type of connection to use with Elasticsearch. Choose between &#39;cloud_id&#39; for Elastic Cloud or &#39;url&#39; for direct connection. |  [optional] |
|**index** | **String** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. |  [optional] |
|**insecureSkipVerify** | **Boolean** | Whether to skip TLS certificate verification (not recommended for production). |  [optional] |
|**url** | **String** | The URL of the Sumo Logic instance. |  [optional] |
|**username** | **String** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. |  [optional] |
|**endpoint** | **String** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. |  [optional] |
|**headers** | **Map&lt;String, String&gt;** | Non secret headers |  [optional] |
|**maxBatchDataSize** | **Integer** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. |  [optional] |
|**maxBatchRecordCount** | **Integer** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. |  [optional] |
|**method** | **String** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). |  [optional] |
|**payloadStructure** | **String** | Determines how the payload is structured. &#39;single&#39; sends each record as a separate request, &#39;array&#39; sends multiple records as an array, &#39;wrapped&#39; sends multiple records within a wrapper object. |  [optional] |
|**rateLimit** | **Integer** | Maximum number of requests per second to send to the endpoint. |  [optional] |
|**tlsSkipVerify** | **Boolean** | Skip TLS verification. |  [optional] |
|**wrapperKey** | **String** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. |  [optional] |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**bucket** | **String** | The name of the S3 bucket where data will be stored |  [optional] |
|**compression** | **String** | The compression method to be applied to the data before storing in S3 |  [optional] |
|**formatConfig** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  |  [optional] |
|**partitionFormat** | **String** | Specifies the format for organizing data into partitions within your S3 bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | An optional prefix for S3 object keys to organize data within the bucket |  [optional] |
|**region** | **String** | The AWS region where the S3 bucket is located |  [optional] |
|**skipSslVerification** | **Boolean** | Whether to skip SSL certificate verification (useful for self-signed certificates or development environments) |  [optional] |
|**usePathStyle** | **Boolean** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. |  [optional] |
|**authMode** | **String** | The authentication mode (basic, aws_role) |  [optional] |
|**roleArn** | **String** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket |  [optional] |
|**alertsConfig** | [**PagerdutyAlertsConfig**](PagerdutyAlertsConfig.md) |  |  [optional] |
|**defaultEventType** | **String** | EventType determines whether events are sent as &#39;change&#39; or &#39;alert&#39; events. We recommend reading the docs for this output before making this choice. |  [optional] |
|**summaryConfig** | [**PagerdutySummaryConfig**](PagerdutySummaryConfig.md) |  |  [optional] |
|**columnNames** | **List&lt;String&gt;** | The column names to write data to, must match the root fields of the data If not provided all root fields will be used |  [optional] |
|**database** | **String** | The name of the Snowflake database to connect to and perform operations on |  [optional] |
|**host** | **String** | The host of the PostgreSQL database |  [optional] |
|**user** | **String** | The username of the Snowflake account used to establish the connection. |  [optional] |
|**bucketName** | **String** | Bucket Name |  [optional] |
|**bucketUrl** | **String** | The name of the S3 bucket where data will be stored |  [optional] |
|**key** | **String** | S3 Key |  [optional] |
|**parquetFormat** | [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  |  [optional] |
|**sourceAccountDetails** | [**SecurityLakeSourceAccountDetails**](SecurityLakeSourceAccountDetails.md) |  |  [optional] |
|**ruleId** | **String** | The unique identifier of the Data Collection Rule (DCR). |  [optional] |
|**streamName** | **String** | The name of the data stream defined in the Data Collection Rule. |  [optional] |
|**account** | **String** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. |  [optional] |
|**caseInsensitivity** | **Boolean** | Treat column names as case-insensitive (convert to uppercase) to match Snowflake&#39;s default behavior. |  [optional] |
|**role** | **String** | The name of the Role your service account was granted which can access your resources. |  [optional] |
|**schema** | **String** | The schema within the Snowflake database where the target table resides. |  [optional] |
|**stage** | **String** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. |  [optional] |
|**warehouse** | **String** | The Snowflake virtual warehouse to use for executing queries and processing data. |  [optional] |
|**allowInsecure** | **Boolean** | Whether to allow insecure connections (not recommended for production). |  [optional] |
|**toCreate** | **Boolean** | Ensure this is selected if you want Monad to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. |  [optional] |



