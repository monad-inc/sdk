# SecretProcessesorInputConfigSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The API hostname for your Duo Security integration. | 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**backfill_start_time** | **str** | Date to start fetching data from up to 180 days. If not specified, a sync of 180 days back is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**project** | **str** | The GCP project ID containing the BigQuery dataset | [optional] 
**rate_limit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**service** | **str** | The Aiven service name | [optional] 
**interval_seconds** | **int** | Time interval in seconds between consecutive GraphQL API calls | [optional] 
**region** | **str** | AWS Region of your bucket. | 
**role_arn** | **str** | Role ARN to assume when reading from S3. | [optional] 
**severity** | **str** | Filter by alert severity (error, warning) | [optional] 
**bucket** | **str** | Name of the S3 bucket that receives Redshift audit logs. | 
**compression** | **str** | Compression format of the objects | 
**format** | **str** | File format of the objects | 
**key_filter** | [**SqsS3BaseKeyFilter**](SqsS3BaseKeyFilter.md) |  | [optional] 
**partition_format** | **str** | Partition format of your bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). | 
**prefix** | **str** | Prefix of the audit log keys, up to (but not including) the date partition — e.g. \&quot;AWSLogs/123456789012/redshift/us-east-1\&quot;. If you configured a custom S3 key prefix for audit logging, include it here. | [optional] 
**record_location** | **str** | JSONPath location of the records array in the GraphQL response | [optional] 
**var_schema** | **List[str]** | Ordered list of column names for headerless delimited files (e.g. PSV). Applies to the \&quot;delimited\&quot; format only; the \&quot;csv\&quot; and \&quot;wsv\&quot; formats always read column names from the first row and ignore this field. | 
**chunking_mode** | [**AwsSqsS3CloudtrailChunkingMode**](AwsSqsS3CloudtrailChunkingMode.md) |  | [optional] 
**exclude_digest_files** | **bool** | ExcludeDigestFiles skips keys containing \&quot;/CloudTrail-Digest/\&quot; (hash signatures, not events). | [optional] 
**queue_url** | **str** |  | 
**uses_sns** | **bool** |  | [optional] 
**with_metadata** | **bool** |  | [optional] 
**correlation_id** | **str** | The correlation ID of the log | [optional] 
**resource_group_name** | **str** | The name of the resource group containing the virtual network | [optional] 
**resource_provider** | **str** | The provider of the resource | [optional] 
**resource_uri** | **str** | The URI of the resource | [optional] 
**subscription_id** | **str** | The Azure subscription ID where the virtual network and storage account are located | [optional] 
**tenant_id** | **str** | The Azure Entra ID tenant (directory) ID | 
**account_url** | **str** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. | [optional] 
**container** | **str** | A container organizes a set of blobs, similar to a directory in a file system. | [optional] 
**consumer_group** | **str** | The consumer group name for reading events (default: &#x60;$Default&#x60;) | [optional] 
**event_hub_name** | **str** | The name of the specific Event Hub to consume from | [optional] 
**event_hub_namespace** | **str** | The fully qualified namespace URL (e.g., &#x60;your-namespace.servicebus.windows.net&#x60;) | [optional] 
**lookback_duration** | **str** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;168h\&quot;). Respects API retention limits. | [optional] 
**storage_account_url** | **str** | The Azure storage account URL where flow logs are stored | [optional] 
**virtual_network_name** | **str** | The name of the virtual network for which flow logs are being collected | [optional] 
**dataset** | **str** | The BigQuery dataset ID containing the table | [optional] 
**query** | **str** | The query to run against the Log Analytics workspace | 
**table** | **str** | The BigQuery table ID to query data from | [optional] 
**timestamp_column** | **str** | The column containing timestamp values used for incremental loading | [optional] 
**base_url** | **str** | Base URL of your Volt.io API instance (e.g., https://api.volt.io) | 
**event_type** | **str** | Only includes events of a specific event type: https://www.twilio.com/docs/usage/monitor-events#event-types | [optional] 
**hostname** | **str** | The Brinqa environment hostname (e.g., \&quot;ssb.brinqa.net\&quot;) | [optional] 
**organization_id** | **str** | Organization ID for the Salesforce instance | [optional] 
**org_slug** | **str** | The ID or slug of the organization | 
**enable_pagination** | **bool** | Enable pagination support | [optional] 
**graphql_query** | **str** | The GraphQL query to execute against the endpoint to fetch data | [optional] 
**has_next_page_path** | **str** | JSONPath location to check if there are more pages | [optional] 
**pagination_cursor_path** | **str** | JSONPath location for pagination cursor/token | [optional] 
**variables** | [**List[MonadGraphqlInputVariable]**](MonadGraphqlInputVariable.md) | GraphQL query variables to pass with each request | [optional] 
**endpoint_url** | **str** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/vulnerability-findings&#39;. | 
**result** | [**List[WizResult]**](WizResult.md) | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;, &#39;ERROR&#39;, &#39;NOT ASSESSED&#39;. | [optional] 
**status** | [**List[WizStatus]**](WizStatus.md) | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. | [optional] 
**enable_proto_payload_parsing** | **bool** | Enables automatic parsing of embedded protocol buffer payloads within the input. | [optional] 
**filter** | **str** | The filter to apply to the logs. | [optional] 
**resource_names** | **List[str]** | The resources to query logs from. | [optional] 
**cloud_platform** | [**List[WizCloudPlatform]**](WizCloudPlatform.md) | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**entity_type** | [**List[WizEntityType]**](WizEntityType.md) | Entity types for Wiz. | 
**full_snapshot** | **bool** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. | [optional] 
**interval** | **int** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. | [optional] 
**account_id** | **str** | Account ID for the input | [optional] 
**include_bot_fields** | **bool** | Include Bot Management fields (requires Enterprise plan with Bot Management add-on) | [optional] 
**zone_id** | **str** | Cloudflare Zone ID | [optional] 
**fields** | **List[str]** | Fields to include in the query. Leave empty to use default curated list. Only fields available to your account will be included (validated against API). Maximum 50 fields due to API constraints. | [optional] 
**filter_my_scans** | **bool** | Filter to only show scans created by the current API token | [optional] 
**parent_entity_id** | **str** | The system-generated ID of the parent entity that is associated with the primary entity affected by the alert. | [optional] 
**parent_entity_type** | **str** | The system-generated name of the parent entity that is associated with the primary entity affected by the alert. | [optional] 
**org_id** | **str** | URL of the organization | [optional] 
**api_key_id** | **str** | API Key ID for authentication | 
**domain_name** | **str** | TODO: Name of domain added on Polymer Hub portal | 
**environment** | **str** | Determines the URI {environment}.docusign.com | 
**user_id** | **str** | ID of the user to harvest audit logs for | 
**category** | **str** | The Category of logs to query | 
**cluster_name** | **str** | The name of the GKE cluster. | 
**uses_static_creds** | **bool** |  | [optional] 
**namespace** | **str** | Your Endor Labs organization namespace (e.g., \&quot;your-org\&quot;) | 
**ingestion_delay** | **int** | The ingestion delay in seconds for the data source | [optional] 
**workspace_id** | **str** | The workspace ID of the Log Analytics workspace | 
**app_name** | **str** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. | [optional] 
**cloud** | **str** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**member_cid** | **str** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. | [optional] 
**repo** | **str** | A repository slug to filter full-scans by. | [optional] 
**auth_config** | [**CommonAuthConfig**](CommonAuthConfig.md) |  | [optional] 
**scope** | [**GithubActionsWorkflowLogsWebhookScopeConfig**](GithubActionsWorkflowLogsWebhookScopeConfig.md) |  | [optional] 
**webhook_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**confidential** | **bool** | Confidential to filter issues by confidentiality status. Confidential &#x3D; true means only show confidential issues. | [optional] 
**gitlab_url** | **str** | GitLab URL (for Custom-Urls when self hosting. Defaults to https://gitlab.com.) | 
**issue_type** | **str** | IssueType to filter issues by type e.g. issue, incident, etc. | [optional] 
**project_id** | **str** | The Google Cloud project ID to use | 
**state** | **str** | State to filter issues by e.g. opened, closed | [optional] 
**with_label_details** | **bool** | Include label details in the response | [optional] 
**location** | **str** | The GCP location (region or zone) where the GKE cluster runs, e.g. us-central1. | 
**bucket_name** | **str** | The name of the Google Cloud Storage bucket to use | [optional] 
**auth_type** | [**ZendeskAuditLogsAuthType**](ZendeskAuditLogsAuthType.md) |  | 
**email** | **str** | Email address to use for authenticating with Google Cloud (required for service_account auth). | [optional] 
**alert_type** | **str** | Filter by alert type (e.g., policy_violated, tag_conflict) | [optional] 
**embed** | **str** | Embed related resources in the data returned (e.g., read-consolidated-alert) | [optional] 
**primary_entity_type** | **str** | Filter by primary entity type (e.g., aws_ebs_volume, vmware_vm) | [optional] 
**primary_entity_value** | **str** | Filter by primary entity value (contains search) | [optional] 
**severities** | [**List[WizIssueSeverity]**](WizIssueSeverity.md) | @Description Filter Issues according to Control severity | [optional] 
**severity_filter** | [**List[TypesStringFilter]**](TypesStringFilter.md) |  | [optional] 
**control_ids** | **List[str]** | @Description Filter Issues created by specific control IDs | [optional] 
**has_note** | [**WizNoteFilter**](WizNoteFilter.md) |  | [optional] 
**has_remediation** | [**WizRemediationFilter**](WizRemediationFilter.md) |  | [optional] 
**has_service_ticket** | [**WizServiceTicketFilter**](WizServiceTicketFilter.md) |  | [optional] 
**issue_ids** | **List[str]** | @Description Filter only Issues that match these specific IDs | [optional] 
**issue_types** | [**List[WizIssueType]**](WizIssueType.md) | @Description Filter by Issue type | [optional] 
**project_ids** | **List[str]** | The GCP project IDs hosting Looker Core instances. | 
**related_entity_id** | **str** | @Description Filter by related entity ids | [optional] 
**resolution_reasons** | [**List[WizResolutionReason]**](WizResolutionReason.md) | @Description Filter Issues by resolution reason | [optional] 
**risk_equals_all** | [**List[WizRiskType]**](WizRiskType.md) | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name @Description All specified risks must be present | [optional] 
**risk_equals_any** | [**List[WizRiskType]**](WizRiskType.md) | @Description Filters Issues by risk type according to Wiz-defined types of risk @Description Use the risk ID and not the risk name | [optional] 
**search_query** | **str** | @Description Free text search on Issue title or object name @Description Returns NULL if no match is found | [optional] 
**security_scan** | **str** | @Description Filter by security scan source | [optional] 
**stack_layers** | [**List[WizStackLayer]**](WizStackLayer.md) | @Description Filter Issues from specific stack layers | [optional] 
**tenant_data_center** | **str** | DataCenter represents the tenant&#39;s data center location. Enter a tenant data center, e.g., \&quot;us1\&quot;, \&quot;us2\&quot;, \&quot;us3\&quot; | 
**audit_log_types** | **List[str]** | Filter audit logs by type(s). Available types: approval_requests, devices, endpoints, extensions, firewall. Leave empty to fetch all types. | [optional] 
**log_categories** | **List[str]** | The audit log categories to ingest. | 
**log_type** | **str** | Which Redshift audit log to ingest. Must be one of the supported log types (connectionlog, userlog). | 
**endpoint** | **str** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) | 
**skip_ssl_verification** | **bool** | Skip SSL verification for self-signed certificates | [optional] 
**use_path_style** | **bool** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. | [optional] 
**subdomain** | **str** | SubDomain is a placeholder that represents your specific OneLogin subdomain. | 
**category_type** | **str** | The category of logs to pull | [optional] 
**domain** | **str** | Domain name for the Oracle Cloud service | 
**username** | **str** | Username of Oracle Cloud service user with permissions to access the resource | 
**github_app_installation_id** | **str** | GitHub App Installation ID (required when using GitHub App authentication) | [optional] 
**github_client_id** | **str** | GitHub Client ID (alternative to personal access token) | [optional] 
**include** | **str** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. | [optional] 
**organization** | **str** | Your GitHub organization name | [optional] 
**client_id** | **str** | ClientID is the Plaid API client_id. Required only when verification is enabled. | [optional] 
**verify_webhooks** | **bool** | VerifyWebhooks toggles Plaid signature verification. Unset defaults to true. | [optional] 
**webhook_types** | **List[str]** | WebhookTypes restricts which webhook_type values are emitted. Empty &#x3D; keep all. | [optional] 
**domain_url** | **str** | Domain URL for the Salesforce instance | [optional] 
**topic** | **str** | Pub/Sub topic to subscribe to | [optional] 
**host_name** | **str** | For self-hosted, specify your host name here. Otherwise, leave it default as sentry.io. | 
**rate** | **int** | The rate at which to generate records (between 1 and 1000) per second | [optional] 
**record_type** | **str** | The type of record to generate | [optional] 
**custom_template** | **str** | A custom template using the functions we provide to generate demo data | [optional] 
**cron** | **str** | Cron expression to schedule the data collection. | [optional] 
**operation_names** | **List[str]** | Filter by specific operation names (optional) | [optional] 
**tenant_domain** | **str** | The Tines tenant domain (e.g., your-org.tines.com) | 
**user_ids** | **List[str]** | Filter by specific user IDs (optional) | [optional] 
**story_id** | **str** | Filter by the given story. | [optional] 
**team_id** | **str** | Filter by the given team. | [optional] 
**tenant_url** | **str** | Unique URL for your Tines instance | 
**actor_sid** | **str** | Only includes events initiated by this Actor. Useful for auditing actions taken by specific users or API credentials. | [optional] 
**replication_start_time** | **str** | Only include events after this time for the initial sync. If not specified, returns all events from the start. Must be a valid ISO 8601 formatted datetime string: yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39; | [optional] 
**resource_sid** | **str** | Only include events that refer to this resource. Useful for discovering the history of a specific resource. | [optional] 
**instance_name** | **str** | Name of the ServiceNow instance | [optional] 
**streams** | **List[str]** | ServiceNow streams to fetch data from | [optional] 
**with_payload** | **bool** | Whether to include detailed payload information in the events. | [optional] 
**customer_id** | **str** | Optional: Filter audit logs by specific customer ID | [optional] 
**asset_status** | [**List[WizAssetStatus]**](WizAssetStatus.md) | Asset status types for Wiz. Ex: &#39;ACTIVE&#39;, &#39;INACTIVE&#39;. | [optional] 
**asset_types** | [**List[WizAssetType]**](WizAssetType.md) | Asset types for Wiz. Ex: &#39;VIRTUAL_MACHINE&#39;, &#39;CONTAINER&#39;, etc. | 
**detection_method** | [**List[WizDetectionMethod]**](WizDetectionMethod.md) | Detection method types for Wiz. Ex: &#39;AGENT&#39;, &#39;CLOUD&#39;, &#39;AGENT_CLOUD&#39;. | [optional] 
**vendor_severity** | [**List[WizVendorSeverity]**](WizVendorSeverity.md) | Vendor severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39; | [optional] 
**email_address** | **str** | This is the email address registered with your Zendesk account | [optional] 
**sub_domain** | **str** | This is the subdomain found in your Zendesk account URL For example, if the URL is https://demo.zendesk.com then the subdomain will be demo | 

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


