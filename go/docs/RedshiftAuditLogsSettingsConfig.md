# RedshiftAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of data up to now is performed on the first sync; subsequent syncs are incremental. | [optional] 
**Bucket** | **string** | Name of the S3 bucket that receives Redshift audit logs. | 
**LogType** | **string** | Which Redshift audit log to ingest. Must be one of the supported log types (connectionlog, userlog). | 
**Prefix** | Pointer to **string** | Prefix of the audit log keys, up to (but not including) the date partition — e.g. \&quot;AWSLogs/123456789012/redshift/us-east-1\&quot;. If you configured a custom S3 key prefix for audit logging, include it here. | [optional] 
**Region** | Pointer to **string** | AWS Region of your bucket. | [optional] 
**RoleArn** | Pointer to **string** | Role ARN to assume when reading from S3. | [optional] 

## Methods

### NewRedshiftAuditLogsSettingsConfig

`func NewRedshiftAuditLogsSettingsConfig(bucket string, logType string, ) *RedshiftAuditLogsSettingsConfig`

NewRedshiftAuditLogsSettingsConfig instantiates a new RedshiftAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRedshiftAuditLogsSettingsConfigWithDefaults

`func NewRedshiftAuditLogsSettingsConfigWithDefaults() *RedshiftAuditLogsSettingsConfig`

NewRedshiftAuditLogsSettingsConfigWithDefaults instantiates a new RedshiftAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *RedshiftAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *RedshiftAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *RedshiftAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *RedshiftAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetBucket

`func (o *RedshiftAuditLogsSettingsConfig) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *RedshiftAuditLogsSettingsConfig) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *RedshiftAuditLogsSettingsConfig) SetBucket(v string)`

SetBucket sets Bucket field to given value.


### GetLogType

`func (o *RedshiftAuditLogsSettingsConfig) GetLogType() string`

GetLogType returns the LogType field if non-nil, zero value otherwise.

### GetLogTypeOk

`func (o *RedshiftAuditLogsSettingsConfig) GetLogTypeOk() (*string, bool)`

GetLogTypeOk returns a tuple with the LogType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogType

`func (o *RedshiftAuditLogsSettingsConfig) SetLogType(v string)`

SetLogType sets LogType field to given value.


### GetPrefix

`func (o *RedshiftAuditLogsSettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *RedshiftAuditLogsSettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *RedshiftAuditLogsSettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *RedshiftAuditLogsSettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRegion

`func (o *RedshiftAuditLogsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *RedshiftAuditLogsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *RedshiftAuditLogsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *RedshiftAuditLogsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *RedshiftAuditLogsSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *RedshiftAuditLogsSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *RedshiftAuditLogsSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *RedshiftAuditLogsSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


