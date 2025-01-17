

# RoutesV2InputConfigSettings


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**actorType** | **String** | Type of actor. Ex: &#39;APT&#39;, &#39;eCrime&#39;, &#39;Hacktivist&#39;, &#39;Insider Threat&#39;, &#39;Nation-State&#39;, &#39;Unknown&#39;, &#39;Other&#39;, etc. Select &#39;None&#39; for no preference. |  [optional] |
|**cloudType** | **String** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. |  [optional] |
|**cron** | **String** | Cron string for scheduling the ingest of your input |  [optional] |
|**sort** | **String** | Order fields in ascending or descending order. Ex: &#39;created_date|asc&#39;, &#39;created_date|desc&#39;. |  [optional] |
|**targetIndustries** | **String** | Industries targeted by the actor. Ex: &#39;Financial&#39;, &#39;Healthcare&#39;, &#39;Energy&#39;, &#39;Government&#39;, &#39;Manufacturing&#39;, &#39;Technology&#39;, etc. Select &#39;None&#39; for no preference. |  [optional] |
|**email** | **String** | Email address to use to authenticate with Google Cloud. |  [optional] |
|**host** | **String** |  |  [optional] |
|**actions** | **List&lt;String&gt;** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) |  [optional] |
|**actor** | **String** | Filter by the username that initiated the action |  [optional] |
|**country** | **String** | Filter by actor&#39;s country code (e.g., US) |  [optional] |
|**createdAfter** | **String** | Only return audit log entries after this RFC3339 formatted time stamp |  [optional] |
|**enterprise** | **String** | Your GitHub enterprise slug or ID |  [optional] |
|**include** | **String** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. |  [optional] |
|**organization** | **String** | Filter by organization name |  [optional] |
|**repository** | **String** | Filter by repository (format: org-name/repo-name) |  [optional] |
|**user** | **String** | Filter by the username that was affected by the action |  [optional] |
|**bucket** | **String** | The name of the S3 bucket |  [optional] |
|**compression** | **String** | Compression format of the S3 objects. |  [optional] |
|**format** | **String** | File format of the S3 objects. |  [optional] |
|**partitionFormat** | **String** | Role ARN to assume when reading from S3. |  [optional] |
|**prefix** | **String** | Prefix of the S3 object keys to read. |  [optional] |
|**recordLocation** | **String** | Specifies the partition format of your S3 bucket. Select the option that matches how your data is currently organized in S3. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. |  [optional] |
|**region** | **String** | The region of the S3 bucket |  [optional] |
|**roleArn** | **String** | The ARN of the role to assume to access the bucket |  [optional] |
|**correlationId** | **String** | The correlation ID of the log |  [optional] |
|**resourceGroupName** | **String** | The name of the resource group |  [optional] |
|**resourceProvider** | **String** | The provider of the resource |  [optional] |
|**resourceUri** | **String** | The URI of the resource |  [optional] |
|**subscriptionId** | **String** | The subscription ID of the Azure subscription |  [optional] |
|**tenantId** | **String** | The tenant ID of the Azure AD application |  [optional] |
|**endpointUrl** | **String** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/vulnerability-findings&#39;. |  [optional] |
|**result** | **List&lt;String&gt;** | Result types for Wiz. Ex: &#39;PASSED&#39;, &#39;FAILED&#39;. |  [optional] |
|**severity** | **List&lt;String&gt;** | Severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. |  [optional] |
|**status** | **List&lt;String&gt;** | Status types for Wiz. Ex: &#39;OPEN&#39;, &#39;RESOLVED&#39;. |  [optional] |
|**filter** | **String** | The filter to apply to the logs. |  [optional] |
|**resourceNames** | **List&lt;String&gt;** | The resources to query logs from. |  [optional] |
|**cloudPlatform** | **List&lt;String&gt;** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**entityType** | **List&lt;String&gt;** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. |  [optional] |
|**rate** | **Integer** | The rate at which to generate records (between 1 and 1000) per second |  [optional] |
|**recordType** | **String** | The type of record to generate |  [optional] |
|**customTemplate** | **String** | A custom template using the functions we provide to generate demo data |  [optional] |
|**category** | **String** | The Category of logs to query |  [optional] |
|**workspaceId** | **String** | The workspace ID of the Log Analytics workspace |  [optional] |
|**appName** | **String** | The application name monad uses to connect to the CrowdStrike data stream. It&#39;s important that this name is unique to avoid conflicts with other applications connecting to the same stream. You&#39;re advised to use a unique identifier for this application. For example, if you have 2 stream input connections they should not both be named &#39;monad&#39;. |  [optional] |
|**cloud** | **String** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. |  [optional] |
|**memberCid** | **String** | In environments where an entity (like an MSSP) manages security for multiple clients, each client is typically assigned a unique CID. This identifier allows the managing entity to access and operate within the specific customer&#39;s environment. This is crucial for scenarios where operational isolation between different clients&#39; data and configurations is necessary. |  [optional] |
|**storyId** | **String** | Filter by the given story. |  [optional] |
|**teamId** | **String** | Team ID to filter user results by |  [optional] |
|**tenantUrl** | **String** | Unique URL for your Tines instance |  [optional] |
|**query** | **String** | The query to run against the Log Analytics workspace |  [optional] |
|**logType** | **String** |  |  [optional] |
|**assetStatus** | **List&lt;String&gt;** | Asset status types for Wiz. Ex: &#39;ACTIVE&#39;, &#39;INACTIVE&#39;. |  [optional] |
|**assetType** | **String** | Asset types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. |  [optional] |
|**detectionMethod** | **List&lt;String&gt;** | Detection method types for Wiz. Ex: &#39;AGENT&#39;, &#39;CLOUD&#39;, &#39;AGENT_CLOUD&#39;. |  [optional] |
|**vendorSeverity** | **List&lt;String&gt;** | Vendor severity types for Wiz. Ex: &#39;CRITICAL&#39;, &#39;HIGH&#39;, &#39;MEDIUM&#39;, &#39;LOW&#39;, &#39;INFO&#39;. |  [optional] |



