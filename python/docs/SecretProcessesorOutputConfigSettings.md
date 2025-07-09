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
**queue_type** | **str** | The type of SQS queue to use. Can be either \&quot;standard\&quot; or \&quot;fifo\&quot;. | [optional] 
**queue_url** | **str** | The URL of the SQS queue to poll for messages. | [optional] 
**region** | **str** | The AWS region where the S3 bucket is located | [optional] 
**role_arn** | **str** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket | [optional] 
**dataset** | **str** | The name of the BigQuery dataset where the table resides | [optional] 
**project_id** | **str** | The Google Cloud Project ID where the BigQuery instance is located | [optional] 
**table** | **str** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist Monad will create the table. | [optional] 
**ingress_address** | **str** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. | [optional] 
**path** | **str** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. | [optional] 
**port** | **str** | The port of the Splunk instance. | [optional] 
**auth_type** | **str** |  | [optional] 
**cloud_id** | **str** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. | [optional] 
**connection_type** | **str** | The type of connection to use with Elasticsearch. Choose between &#39;cloud_id&#39; for Elastic Cloud or &#39;url&#39; for direct connection. | [optional] 
**index** | **str** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**insecure_skip_verify** | **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**url** | **str** | The URL of the Sumo Logic instance. | [optional] 
**username** | **str** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. | [optional] 
**bucket** | **str** | The name of the S3 bucket where data will be stored | [optional] 
**format** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  | [optional] 
**endpoint** | **str** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. | [optional] 
**headers** | [**List[HttpHeaders]**](HttpHeaders.md) | Non secret headers | [optional] 
**max_batch_data_size** | **int** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. | [optional] 
**max_batch_record_count** | **int** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. | [optional] 
**method** | **str** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). | [optional] 
**payload_structure** | **str** | Determines how the payload is structured. &#39;single&#39; sends each record as a separate request, &#39;array&#39; sends multiple records as an array, &#39;wrapped&#39; sends multiple records within a wrapper object. | [optional] 
**rate_limit** | **int** | Maximum number of requests per second to send to the endpoint. | [optional] 
**tls_skip_verify** | **bool** | Skip TLS verification. | [optional] 
**wrapper_key** | **str** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. | [optional] 
**skip_ssl_verification** | **bool** | Whether to skip SSL certificate verification (useful for self-signed certificates or development environments) | [optional] 
**use_path_style** | **bool** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. | [optional] 
**auth_mode** | **str** | The authentication mode (basic, aws_role) | [optional] 
**alerts_config** | [**PagerdutyAlertsConfig**](PagerdutyAlertsConfig.md) |  | [optional] 
**default_event_type** | **str** | EventType determines whether events are sent as &#39;change&#39; or &#39;alert&#39; events. We recommend reading the docs for this output before making this choice. | [optional] 
**summary_config** | [**PagerdutySummaryConfig**](PagerdutySummaryConfig.md) |  | [optional] 
**column_names** | **List[str]** | The column names to write data to, must match the root fields of the data If not provided all root fields will be used | [optional] 
**database** | **str** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**host** | **str** | The host of the PostgreSQL database | [optional] 
**user** | **str** | The username of the Snowflake account used to establish the connection. | [optional] 
**bucket_name** | **str** | Bucket Name | [optional] 
**bucket_url** | **str** | The name of the S3 bucket where data will be stored | [optional] 
**key** | **str** | S3 Key | [optional] 
**parquet_format** | [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  | [optional] 
**source_account_details** | [**SecurityLakeSourceAccountDetails**](SecurityLakeSourceAccountDetails.md) |  | [optional] 
**rule_id** | **str** | The unique identifier of the Data Collection Rule (DCR). | [optional] 
**stream_name** | **str** | The name of the data stream defined in the Data Collection Rule. | [optional] 
**account** | **str** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**case_insensitivity** | **bool** | Treat column names as case-insensitive (convert to uppercase) to match Snowflake&#39;s default behavior. | [optional] 
**role** | **str** | The name of the Role your service account was granted which can access your resources. | [optional] 
**var_schema** | **str** | The schema within the Snowflake database where the target table resides. | [optional] 
**stage** | **str** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. | [optional] 
**warehouse** | **str** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 
**allow_insecure** | **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 
**to_create** | **bool** | Ensure this is selected if you want Monad to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. | [optional] 

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


