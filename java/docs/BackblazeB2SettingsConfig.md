

# BackblazeB2SettingsConfig

Backblaze B2 settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from |  [optional] |
|**bucket** | **String** | Name of the B2 bucket |  [optional] |
|**compression** | **String** | Compression format of the B2 objects |  [optional] |
|**format** | **String** | File format of the B2 objects |  [optional] |
|**partitionFormat** | **String** | Partition format of your B2 bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | Prefix of the B2 object keys to read |  [optional] |
|**recordLocation** | **String** | Location of the record in the object. Applies only for JSON objects. Leave empty for the entire record. |  [optional] |
|**region** | **String** | B2 Region of your bucket (e.g., us-west-001, us-west-002, eu-central-003) |  [optional] |



