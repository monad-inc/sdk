# LookerAuditLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LogCategories** | **[]string** | The audit log categories to ingest. | 
**ProjectIds** | **[]string** | The GCP project IDs hosting Looker Core instances. | 

## Methods

### NewLookerAuditLogsSettingsConfig

`func NewLookerAuditLogsSettingsConfig(logCategories []string, projectIds []string, ) *LookerAuditLogsSettingsConfig`

NewLookerAuditLogsSettingsConfig instantiates a new LookerAuditLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLookerAuditLogsSettingsConfigWithDefaults

`func NewLookerAuditLogsSettingsConfigWithDefaults() *LookerAuditLogsSettingsConfig`

NewLookerAuditLogsSettingsConfigWithDefaults instantiates a new LookerAuditLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLogCategories

`func (o *LookerAuditLogsSettingsConfig) GetLogCategories() []string`

GetLogCategories returns the LogCategories field if non-nil, zero value otherwise.

### GetLogCategoriesOk

`func (o *LookerAuditLogsSettingsConfig) GetLogCategoriesOk() (*[]string, bool)`

GetLogCategoriesOk returns a tuple with the LogCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogCategories

`func (o *LookerAuditLogsSettingsConfig) SetLogCategories(v []string)`

SetLogCategories sets LogCategories field to given value.


### GetProjectIds

`func (o *LookerAuditLogsSettingsConfig) GetProjectIds() []string`

GetProjectIds returns the ProjectIds field if non-nil, zero value otherwise.

### GetProjectIdsOk

`func (o *LookerAuditLogsSettingsConfig) GetProjectIdsOk() (*[]string, bool)`

GetProjectIdsOk returns a tuple with the ProjectIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectIds

`func (o *LookerAuditLogsSettingsConfig) SetProjectIds(v []string)`

SetProjectIds sets ProjectIds field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


