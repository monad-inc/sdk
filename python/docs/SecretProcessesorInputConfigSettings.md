# SecretProcessesorInputConfigSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fleet_url** | **str** | URL of the Fleet DM instance | [optional] 
**actor_type** | **str** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**cloud_type** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**cron** | **str** | Cron expression to schedule the data collection. | [optional] 
**sort** | **str** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. | [optional] 
**target_industries** | **str** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. | [optional] 
**auth_type** | **str** | Authentication type (service_account or oauth) | [optional] 
**email** | **str** | Email address to use to authenticate with Google Cloud (required for service_account auth). | [optional] 
**host** | **str** |  | [optional] 
**actions** | **List[str]** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) | [optional] 
**actor** | **str** | Filter by the username that initiated the action | [optional] 
**country** | **str** | Filter by actor&#39;s country code (e.g., US) | [optional] 
**created_after** | **str** | Only return audit log entries after this RFC3339 formatted time stamp | [optional] 
**enterprise** | **str** | Your GitHub enterprise slug or ID | [optional] 
**include** | **str** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**organization** | **str** | Filter by organization name | [optional] 
**repository** | **str** | Filter by repository (format: org-name/repo-name) | [optional] 
**user** | **str** | The username of the Snowflake account used to establish the connection. | [optional] 
**region** | **str** | The AWS region where the security groups that are being fetched are located. | [optional] 
**role_arn** | **str** | RoleArn is the ARN of the IAM role to assume for accessing AWS security groups. | [optional] 
**severity** | **str** |  | [optional] 
**bucket** | **str** | Name of the storage bucket | [optional] 
**compression** | **str** | Compression format of the objects | [optional] 
**format** | **str** | File format of the objects | [optional] 
**partition_format** | **str** | Specifies the partition format of your bucket. Select the option that matches how your data is currently organized. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. | [optional] 
**prefix** | **str** | Prefix that leads to the start of the expected partition. For example: \&quot;/foobar/year&#x3D;2024/month&#x3D;01/day&#x3D;01/\&quot;. The prefix is &#x60;foobar&#x60;. | [optional] 
**record_location** | **str** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. If the records are not nested in the JSON, you can use &#39;@this&#39; to indicate that the file contains the record at the root or an array of records. | [optional] 
**queue_url** | **str** | The URL of the SQS queue to poll for messages. | [optional] 
**correlation_id** | **str** | The correlation ID of the log | [optional] 
**resource_group_name** | **str** | The name of the resource group containing the virtual network | [optional] 
**resource_provider** | **str** | The provider of the resource | [optional] 
**resource_uri** | **str** | The URI of the resource | [optional] 
**subscription_id** | **str** | The Azure subscription ID where the virtual network and storage account are located | [optional] 
**tenant_id** | **str** | The tenant ID of the Azure AD application | [optional] 
**account_url** | **str** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. | [optional] 
**container** | **str** | A container organizes a set of blobs, similar to a directory in a file system. | [optional] 
**storage_account_url** | **str** | The Azure storage account URL where flow logs are stored | [optional] 
**virtual_network_name** | **str** | The name of the virtual network for which flow logs are being collected | [optional] 
**dataset** | **str** | The BigQuery dataset ID containing the table | [optional] 
**project** | **str** | The GCP project ID containing the BigQuery dataset | [optional] 
**query** | **str** | Optional custom query to use instead of table (must include timestamp_column) | [optional] 
**table** | **str** | The name of the table in Snowflake to query data from. | [optional] 
**timestamp_column** | **str** | The column containing timestamp values used for incremental loading | [optional] 
**event_type** | **str** | Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types | [optional] 
**filter_term** | **str** | Limits the results to only users who&#39;s name or login start with the search term. | [optional] 
**asset_types** | **List[str]** | The type of assets to scan for.  If left empty, will scan all assets | [optional] 
**resource_names** | **List[str]** | The resources to query logs from. | [optional] 
**endpoint_url** | **str** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/vulnerability-findings&#39;. | [optional] 
**result** | **List[str]** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. | [optional] 
**status** | **List[str]** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. | [optional] 
**enable_proto_payload_parsing** | **bool** | Enables automatic parsing of embedded protocol buffer payloads within the input. | [optional] 
**filter** | [**CognitoUsersFilter**](CognitoUsersFilter.md) |  | [optional] 
**cloud_platform** | **List[str]** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**entity_type** | **List[str]** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. | [optional] 
**full_snapshot** | **bool** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. | [optional] 
**interval** | **int** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. | [optional] 
**user_pool_id** | **str** | User Pool ID to extract users from | [optional] 
**aws_queue_url** | **str** | AWS SQS queue URL provided to you by the CrowdStrike Falcon console | [optional] 
**aws_region_name** | **str** | Name of the region where the queue resides | [optional] 
**aws_s3_url** | **str** | The URL of the S3 bucket | [optional] 
**visibility_timeout** | **int** | Time in seconds before a message is returned back to the SQS queue | [optional] 
**category** | **str** | The Category of logs to query | [optional] 
**rate** | **int** | The rate at which to generate records (between 1 and 1000) per second | [optional] 
**record_type** | **str** | The type of record to generate | [optional] 
**custom_template** | **str** | A custom template using the functions we provide to generate demo data | [optional] 
**field_option** | **str** |  | [optional] 
**organization_id** | **str** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. | [optional] 
**workspace_id** | **str** | The workspace ID of the Log Analytics workspace | [optional] 
**app_name** | **str** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. | [optional] 
**cloud** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**member_cid** | **str** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. | [optional] 
**actor_sid** | **str** | Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials. | [optional] 
**replication_start_time** | **str** | Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39; | [optional] 
**resource_sid** | **str** | Only include events that refer to this resource. Useful for discovering the history of a specific resource. | [optional] 
**story_id** | **str** | Filter by the given story. | [optional] 
**team_id** | **str** | Team ID to filter user results by | [optional] 
**tenant_url** | **str** | Unique URL for your Tines instance | [optional] 
**org_slug** | **str** | The ID or slug of the organization | [optional] 
**repo** | **str** | A repository slug to filter full-scans by. | [optional] 
**confidential** | **bool** | Confidential to filter issues by confidentiality status. Confidential &#x3D; true means only show confidential issues. | [optional] 
**gitlab_url** | **str** | GitLab URL (for Custom-Urls when self hosting. Defaults to https://gitlab.com.) | [optional] 
**issue_type** | **str** | IssueType to filter issues by type e.g. issue, incident, etc. | [optional] 
**project_id** | **str** | The Google Cloud project ID to use | [optional] 
**state** | **str** | State to filter issues by e.g. opened, closed | [optional] 
**with_label_details** | **bool** | Include label details in the response | [optional] 
**bucket_name** | **str** | The name of the Google Cloud Storage bucket to use | [optional] 
**analyzer_arn** | **str** | The [ARN of the analyzer] to retrieve findings from. | [optional] 
**filters** | [**List[SecurityGroupsFilter]**](SecurityGroupsFilter.md) | Filters for the security groups | [optional] 
**control_ids** | **List[str]** | @Description Filter Issues created by specific control IDs | [optional] 
**has_note** | **str** | @Description Filter Issues with or without a note | [optional] 
**has_remediation** | **str** | @Description Filter Issues with or without remediation | [optional] 
**has_service_ticket** | **str** | @Description Filter Issues with or without related service ticket | [optional] 
**issue_ids** | **List[str]** | @Description Filter only Issues that match these specific IDs | [optional] 
**issue_types** | **List[str]** | @Description Filter by Issue type | [optional] 
**project_ids** | **List[str]** | @Description Filter Issues associated with specific project IDs | [optional] 
**related_entity_id** | **str** | @Description Filter by related entity ids | [optional] 
**resolution_reasons** | **List[str]** | @Description Filter Issues by resolution reason | [optional] 
**risk_equals_all** | **List[str]** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present | [optional] 
**risk_equals_any** | **List[str]** | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name | [optional] 
**search_query** | **str** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found | [optional] 
**security_scan** | **str** | @Description Filter by security scan source | [optional] 
**severities** | **List[str]** | @Description Filter Issues according to Control severity | [optional] 
**stack_layers** | **List[str]** | @Description Filter Issues from specific stack layers | [optional] 
**tenant_data_center** | **str** | DataCenter represents the tenant&#39;s data center location @Description Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; @Description Find your tenant data center on the Tenant Info page in Wiz, or request it from your Wiz customer contact | [optional] 
**kms_type** | **str** | Type of KMS resources to list | [optional] 
**log_type** | **str** |  | [optional] 
**endpoint** | **str** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) | [optional] 
**skip_ssl_verification** | **bool** | Skip SSL verification for self-signed certificates | [optional] 
**use_path_style** | **bool** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. | [optional] 
**subdomain** | **str** | SubDomain is a placeholder that represents your specific OneLogin subdomain. | [optional] 
**child_type** | **str** | Specifies whether to list AWS accounts or organizational units (OUs) as children of the parent entity. | [optional] 
**parent_id** | **str** | Parent ID to list children for | [optional] 
**base_url** | **str** | URL of the organization | [optional] 
**evaluation_context_identifier** | **str** | Filters proactive resource evaluations for a given infrastructure deployment. | [optional] 
**include_planned_deletion** | **bool** | Whether or not to include secrets scheduled for deletion | [optional] 
**host_name** | **str** | For self-hosted, specify your host name here. Otherwise, leave it default as sentry.io. | [optional] 
**account** | **str** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**database** | **str** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**role** | **str** | The name of the Role your service account was granted which can access your resources. | [optional] 
**var_schema** | **str** | The schema within the Snowflake database where the target table resides. | [optional] 
**warehouse** | **str** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 
**org_url** | **str** | The URL of the Okta organization | [optional] 
**user_role_option** | **str** | Allows for filtering the output by user role. | [optional] 
**user_type_option** | **str** | Allows for filtering the output by user type. | [optional] 
**asset_status** | **List[str]** | Asset status types for Wiz. Ex: &#39;ACTIVE&#39;, &#39;INACTIVE&#39;. | [optional] 
**asset_type** | **str** | Asset types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**detection_method** | **List[str]** | Detection method types for Wiz. Ex: &#39;AGENT&#39;, &#39;CLOUD&#39;, &#39;AGENT_CLOUD&#39;. | [optional] 
**vendor_severity** | **List[str]** | Vendor severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. | [optional] 

## Example

```python
from monad.models.secret_processesor_input_config_settings import SecretProcessesorInputConfigSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProcessesorInputConfigSettings from a JSON string
secret_processesor_input_config_settings_instance = SecretProcessesorInputConfigSettings.from_json(json)
# print the JSON string representation of the object
print(SecretProcessesorInputConfigSettings.to_json())

# convert the object into a dict
secret_processesor_input_config_settings_dict = secret_processesor_input_config_settings_instance.to_dict()
# create an instance of SecretProcessesorInputConfigSettings from a dict
secret_processesor_input_config_settings_from_dict = SecretProcessesorInputConfigSettings.from_dict(secret_processesor_input_config_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


