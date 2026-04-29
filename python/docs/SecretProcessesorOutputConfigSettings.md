# SecretProcessesorOutputConfigSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_url** | **str** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. | [optional] 
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**compression** | **str** | The compression method to be applied to the data before storing in S3 | [optional] 
**container** | **str** | A container organizes a set of blobs, similar to a directory in a file system. | [optional] 
**format_config** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**partition_format** | **str** | Specifies the format for organizing data into partitions within your S3 bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). | [optional] 
**prefix** | **str** | An optional prefix for S3 object keys to organize data within the bucket | [optional] 
**message_group_id** | **str** | The message group ID for FIFO queues. This is required for FIFO queues. | [optional] 
**queue_type** | [**AwssqsoutputQueueType**](AwssqsoutputQueueType.md) |  | [optional] 
**queue_url** | **str** | The URL of the SQS queue to poll for messages. | [optional] 
**region** | **str** | The AWS region where the S3 bucket is located | [optional] 
**role_arn** | **str** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket | [optional] 
**dataset** | **str** | The name of the BigQuery dataset where the table resides | [optional] 
**bucket** | **str** | The name of the S3 bucket where data will be stored | [optional] 
**project_id** | **str** | The Google Cloud Project ID where the BigQuery instance is located | [optional] 
**table** | **str** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist Monad will create the table. | [optional] 
**ingress_address** | **str** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. | [optional] 
**path** | **str** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. | [optional] 
**port** | **str** | The port of the Splunk instance. | [optional] 
**catalog** | **str** | The Unity Catalog name | [optional] 
**http_path** | **str** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123) | [optional] 
**var_schema** | **str** | The schema within the Snowflake database where the target table resides. | [optional] 
**server_hostname** | **str** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | [optional] 
**volume** | **str** | The Unity Catalog Volume used for staging JSONL files before COPY INTO | [optional] 
**ddsource** | **str** | The integration name associated with your log: the technology from which the log originated. When it matches an integration name, Datadog automatically installs the corresponding parsers and facets. | [optional] 
**ddtags** | **List[str]** | Tags associated with your logs. | [optional] 
**domain_url** | **str** | The base domain of the Datadog API (e.g., us5.datadoghq.com). Logs are sent to https://http-intake.logs.&lt;DOMAIN_URL&gt;/api/v2/logs | [optional] 
**hostname** | **str** | The name of the originating host of the log. | [optional] 
**service** | **str** | The name of the application or service generating the log events. It is used to switch from Logs to APM, so make sure you define the same value when you use both products. | [optional] 
**auth_type** | **str** |  | [optional] 
**cloud_id** | **str** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. | [optional] 
**connection_type** | [**ElasticsearchConnectionTypeEnum**](ElasticsearchConnectionTypeEnum.md) |  | [optional] 
**index** | **str** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**insecure_skip_verify** | **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**url** | **str** | The URL of the Sumo Logic instance. | [optional] 
**username** | **str** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. | [optional] 
**format** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**endpoint** | **str** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. | [optional] 
**headers** | [**List[KafkaKafkaHeader]**](KafkaKafkaHeader.md) | Static headers to add to each Kafka message | [optional] 
**max_batch_data_size** | **int** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. | [optional] 
**max_batch_record_count** | **int** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. | [optional] 
**method** | **str** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). | [optional] 
**payload_structure** | [**HttpPayloadStructure**](HttpPayloadStructure.md) |  | [optional] 
**rate_limit** | **int** | Maximum number of requests per second to send to the endpoint. | [optional] 
**tls_skip_verify** | **bool** |  | [optional] 
**wrapper_key** | **str** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. | [optional] 
**acks** | [**KafkaAcks**](KafkaAcks.md) |  | [optional] 
**bootstrap_servers** | **str** | Comma-separated list of Kafka broker addresses (host:port) | [optional] 
**compression_type** | [**KafkaCompressionType**](KafkaCompressionType.md) |  | [optional] 
**message_key_field** | **str** | JSON field path to extract as the Kafka message key (uses gjson syntax) | [optional] 
**retries** | **int** | Number of retry attempts for failed writes | [optional] 
**sasl_mechanism** | [**KafkaSaslMechanism**](KafkaSaslMechanism.md) |  | [optional] 
**security_protocol** | [**KafkaSecurityProtocol**](KafkaSecurityProtocol.md) |  | [optional] 
**topic** | **str** | The Kafka topic to publish messages to | [optional] 
**key_field** | **str** | The field in the incoming record to use as the key | [optional] 
**ttl** | **int** | Time-to-live in hours for stored key-value pairs (0 means no expiration) | [optional] 
**value_field** | **str** |  | [optional] 
**skip_ssl_verification** | **bool** | Whether to skip SSL certificate verification (useful for self-signed certificates or development environments) | [optional] 
**use_path_style** | **bool** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. | [optional] 
**auth_mode** | [**OpensearchAuthMode**](OpensearchAuthMode.md) |  | [optional] 
**alerts_config** | [**PagerdutyAlertsConfig**](PagerdutyAlertsConfig.md) |  | [optional] 
**default_event_type** | [**PagerdutyEventType**](PagerdutyEventType.md) |  | [optional] 
**summary_config** | [**PagerdutySummaryConfig**](PagerdutySummaryConfig.md) |  | [optional] 
**http_ingest_url** | **str** |  | [optional] 
**column_names** | **List[str]** | The column names to write data to, must match the root fields of the data If not provided all root fields will be used | [optional] 
**database** | **str** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**host** | **str** | The host of the PostgreSQL database | [optional] 
**user** | **str** | The username of the Snowflake account used to establish the connection. | [optional] 
**auth** | [**PrometheusAuthConfig**](PrometheusAuthConfig.md) |  | [optional] 
**label_fields** | **List[str]** |  | [optional] 
**metric_name** | [**PrometheusMetricNameConfig**](PrometheusMetricNameConfig.md) |  | [optional] 
**timestamp_field** | **str** |  | [optional] 
**bucket_name** | **str** | Bucket Name | [optional] 
**bucket_url** | **str** | The name of the S3 bucket where data will be stored | [optional] 
**key** | **str** | S3 Key | [optional] 
**parquet_format** | [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  | [optional] 
**source_account_details** | [**SecurityLakeSourceAccountDetails**](SecurityLakeSourceAccountDetails.md) |  | [optional] 
**rule_id** | **str** | The unique identifier of the Data Collection Rule (DCR). | [optional] 
**stream_name** | **str** | The name of the data stream defined in the Data Collection Rule. | [optional] 
**auth_config** | [**SlackAuthConfig**](SlackAuthConfig.md) |  | [optional] 
**message_template** | **str** |  | [optional] 
**account** | **str** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**case_insensitivity** | **bool** | Treat column names as case-insensitive (convert to uppercase) to match Snowflake&#39;s default behavior. | [optional] 
**role** | **str** | The name of the Role your service account was granted which can access your resources. | [optional] 
**stage** | **str** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. | [optional] 
**warehouse** | **str** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 
**allow_insecure** | **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 
**to_create** | **bool** | Ensure this is selected if you want Monad to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**source_metadata** | [**SumologicSourceMetadata**](SumologicSourceMetadata.md) |  | [optional] 

## Example

```python
from monad.models.secret_processesor_output_config_settings import SecretProcessesorOutputConfigSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProcessesorOutputConfigSettings from a JSON string
secret_processesor_output_config_settings_instance = SecretProcessesorOutputConfigSettings.from_json(json)
# print the JSON string representation of the object
print(SecretProcessesorOutputConfigSettings.to_json())

# convert the object into a dict
secret_processesor_output_config_settings_dict = secret_processesor_output_config_settings_instance.to_dict()
# create an instance of SecretProcessesorOutputConfigSettings from a dict
secret_processesor_output_config_settings_from_dict = SecretProcessesorOutputConfigSettings.from_dict(secret_processesor_output_config_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


