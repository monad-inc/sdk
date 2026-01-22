# BuildkiteAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Generate synthetic demo data instead of connecting to the real data source. UseSyntheticData bool &#x60;json:\&quot;use_synthetic_data\&quot;&#x60; Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**OrgSlug** | Pointer to **string** | The URL slug of your Buildkite organizations | [optional] 

## Methods

### NewBuildkiteAuditLogsSettingsConfig

`func NewBuildkiteAuditLogsSettingsConfig() *BuildkiteAuditLogsSettingsConfig`

NewBuildkiteAuditLogsSettingsConfig instantiates a new BuildkiteAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBuildkiteAuditLogsSettingsConfigWithDefaults

`func NewBuildkiteAuditLogsSettingsConfigWithDefaults() *BuildkiteAuditLogsSettingsConfig`

NewBuildkiteAuditLogsSettingsConfigWithDefaults instantiates a new BuildkiteAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *BuildkiteAuditLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *BuildkiteAuditLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *BuildkiteAuditLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *BuildkiteAuditLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetOrgSlug

`func (o *BuildkiteAuditLogsSettingsConfig) GetOrgSlug() string`

GetOrgSlug returns the OrgSlug field if non-nil, zero value otherwise.

### GetOrgSlugOk

`func (o *BuildkiteAuditLogsSettingsConfig) GetOrgSlugOk() (*string, bool)`

GetOrgSlugOk returns a tuple with the OrgSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgSlug

`func (o *BuildkiteAuditLogsSettingsConfig) SetOrgSlug(v string)`

SetOrgSlug sets OrgSlug field to given value.

### HasOrgSlug

`func (o *BuildkiteAuditLogsSettingsConfig) HasOrgSlug() bool`

HasOrgSlug returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


