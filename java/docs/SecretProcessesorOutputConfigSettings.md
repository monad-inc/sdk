

# SecretProcessesorOutputConfigSettings


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountUrl** | **String** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. |  [optional] |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  |
|**compression** | [**CompressionEnum**](#CompressionEnum) | Compression applied before upload. Scanner indexes both uncompressed and gzip objects. |  |
|**container** | **String** | A container organizes a set of blobs, similar to a directory in a file system. |  [optional] |
|**formatConfig** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  |  [optional] |
|**partitionFormat** | **String** | Directory structure used to partition stored objects. |  [optional] |
|**prefix** | **String** | Optional prefix for S3 object keys. Should match the prefix on the Scanner source. |  [optional] |
|**messageGroupId** | **String** | The message group ID for FIFO queues. This is required for FIFO queues. |  [optional] |
|**queueType** | **AwssqsoutputQueueType** |  |  [optional] |
|**queueUrl** | **String** | The URL of the SQS queue to poll for messages. |  [optional] |
|**region** | **String** | The AWS region where the S3 bucket is located. |  |
|**roleArn** | **String** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket |  [optional] |
|**dataset** | **String** | The name of the BigQuery dataset where the table resides |  [optional] |
|**bucket** | **String** | The S3 bucket in your AWS account that Scanner indexes. |  |
|**projectId** | **String** | The Google Cloud Project ID where the BigQuery instance is located |  [optional] |
|**table** | **String** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist Monad will create the table. |  [optional] |
|**ingressAddress** | **String** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. |  [optional] |
|**path** | **String** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. |  [optional] |
|**port** | **String** | The port of the Splunk instance. |  [optional] |
|**catalog** | **String** | The Unity Catalog name |  |
|**httpPath** | **String** | Deprecated. Moved under copy_into mode. Autoloader does not require warehouse The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123). Required for copy_into mode; not needed for autoloader. |  [optional] |
|**schema** | **String** | The schema within the Snowflake database where the target table resides. |  |
|**serverHostname** | **String** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) |  |
|**volume** | **String** | The Unity Catalog Volume used for staging JSONL files |  |
|**writeMode** | [**DatabricksDeltaTableWriteMode**](DatabricksDeltaTableWriteMode.md) |  |  |
|**ddsource** | **String** | The integration name associated with your log: the technology from which the log originated. When it matches an integration name, Datadog automatically installs the corresponding parsers and facets. |  [optional] |
|**ddtags** | **List&lt;String&gt;** | Tags associated with your logs. |  [optional] |
|**domainUrl** | **String** | The base domain of the Datadog API (e.g., us5.datadoghq.com). Logs are sent to https://http-intake.logs.&lt;DOMAIN_URL&gt;/api/v2/logs |  [optional] |
|**hostname** | **String** | The name of the originating host of the log. |  [optional] |
|**service** | **String** | The name of the application or service generating the log events. It is used to switch from Logs to APM, so make sure you define the same value when you use both products. |  [optional] |
|**authConfig** | [**SlackAuthConfig**](SlackAuthConfig.md) |  |  [optional] |
|**authType** | **String** |  |  [optional] |
|**cloudId** | **String** |  |  [optional] |
|**connectionConfig** | [**ElasticsearchConnectionConfig**](ElasticsearchConnectionConfig.md) |  |  [optional] |
|**connectionType** | **String** |  |  [optional] |
|**index** | **String** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. |  |
|**insecureSkipVerify** | **Boolean** | Whether to skip TLS certificate verification (not recommended for production). |  [optional] |
|**url** | **String** | The URL of the Sumo Logic instance. |  [optional] |
|**username** | **String** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. |  |
|**format** | [**ScannerFormatConfig**](ScannerFormatConfig.md) |  |  [optional] |
|**endpoint** | **String** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. |  [optional] |
|**headers** | [**List&lt;KafkaKafkaHeader&gt;**](KafkaKafkaHeader.md) | Static headers to add to each Kafka message |  [optional] |
|**maxBatchDataSize** | **Integer** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. |  [optional] |
|**maxBatchRecordCount** | **Integer** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. |  [optional] |
|**method** | **String** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). |  [optional] |
|**payloadStructure** | **HttpPayloadStructure** |  |  [optional] |
|**rateLimit** | **Integer** | Maximum number of requests per second to send to the endpoint. |  [optional] |
|**tlsSkipVerify** | **Boolean** |  |  [optional] |
|**wrapperKey** | **String** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. |  [optional] |
|**acks** | **KafkaAcks** |  |  [optional] |
|**bootstrapServers** | **String** | Comma-separated list of Kafka broker addresses (host:port) |  [optional] |
|**compressionType** | **KafkaCompressionType** |  |  [optional] |
|**messageKeyField** | **String** | JSON field path to extract as the Kafka message key (uses gjson syntax) |  [optional] |
|**retries** | **Integer** | Number of retry attempts for failed writes |  [optional] |
|**saslMechanism** | **KafkaSaslMechanism** |  |  [optional] |
|**securityProtocol** | **KafkaSecurityProtocol** |  |  [optional] |
|**topic** | **String** | The Kafka topic to publish messages to |  [optional] |
|**keyField** | **String** | The field in the incoming record to use as the key |  [optional] |
|**ttl** | **Integer** | Time-to-live in hours for stored key-value pairs (0 means no expiration) |  [optional] |
|**valueField** | **String** |  |  [optional] |
|**skipSslVerification** | **Boolean** | Whether to skip SSL certificate verification (useful for self-signed certificates or development environments) |  [optional] |
|**usePathStyle** | **Boolean** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. |  [optional] |
|**authMode** | **OpensearchAuthMode** |  |  [optional] |
|**alertsConfig** | [**PagerdutyAlertsConfig**](PagerdutyAlertsConfig.md) |  |  [optional] |
|**defaultEventType** | **PagerdutyEventType** |  |  [optional] |
|**summaryConfig** | [**PagerdutySummaryConfig**](PagerdutySummaryConfig.md) |  |  [optional] |
|**httpIngestUrl** | **String** |  |  [optional] |
|**columnNames** | **List&lt;String&gt;** | The column names to write data to, must match the root fields of the data If not provided all root fields will be used |  [optional] |
|**database** | **String** | The name of the Snowflake database to connect to and perform operations on |  [optional] |
|**host** | **String** | The host of the PostgreSQL database |  [optional] |
|**user** | **String** | The username of the Snowflake account used to establish the connection. |  [optional] |
|**auth** | [**ScannerAuthConfig**](ScannerAuthConfig.md) |  |  [optional] |
|**labelFields** | **List&lt;String&gt;** |  |  [optional] |
|**metricName** | [**PrometheusMetricNameConfig**](PrometheusMetricNameConfig.md) |  |  [optional] |
|**timestampField** | **String** |  |  [optional] |
|**bucketName** | **String** | Bucket Name |  [optional] |
|**bucketUrl** | **String** | The name of the S3 bucket where data will be stored |  [optional] |
|**key** | **String** | S3 Key |  [optional] |
|**parquetFormat** | [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  |  [optional] |
|**sourceAccountDetails** | [**SecurityLakeSourceAccountDetails**](SecurityLakeSourceAccountDetails.md) |  |  [optional] |
|**ruleId** | **String** | The unique identifier of the Data Collection Rule (DCR). |  [optional] |
|**streamName** | **String** | The name of the data stream defined in the Data Collection Rule. |  [optional] |
|**messageTemplate** | **String** |  |  [optional] |
|**account** | **String** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. |  [optional] |
|**caseInsensitivity** | **Boolean** | Treat column names as case-insensitive (convert to uppercase) to match Snowflake&#39;s default behavior. |  [optional] |
|**role** | **String** | The name of the Role your service account was granted which can access your resources. |  [optional] |
|**stage** | **String** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. |  [optional] |
|**warehouse** | **String** | The Snowflake virtual warehouse to use for executing queries and processing data. |  [optional] |
|**allowInsecure** | **Boolean** | Whether to allow insecure connections (not recommended for production). |  [optional] |
|**toCreate** | **Boolean** | Ensure this is selected if you want Monad to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. |  [optional] |
|**sourceMetadata** | [**SumologicSourceMetadata**](SumologicSourceMetadata.md) |  |  [optional] |



## Enum: CompressionEnum

| Name | Value |
|---- | -----|
| NONE | &quot;none&quot; |
| GZIP | &quot;gzip&quot; |



