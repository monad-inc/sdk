# LogAnalyticsQuerySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** | The query to run against the Log Analytics workspace | [optional] 
**TenantId** | Pointer to **string** | The tenant ID of the Azure AD application | [optional] 
**WorkspaceId** | Pointer to **string** | The workspace ID of the Log Analytics workspace | [optional] 

## Methods

### NewLogAnalyticsQuerySettingsConfig

`func NewLogAnalyticsQuerySettingsConfig() *LogAnalyticsQuerySettingsConfig`

NewLogAnalyticsQuerySettingsConfig instantiates a new LogAnalyticsQuerySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLogAnalyticsQuerySettingsConfigWithDefaults

`func NewLogAnalyticsQuerySettingsConfigWithDefaults() *LogAnalyticsQuerySettingsConfig`

NewLogAnalyticsQuerySettingsConfigWithDefaults instantiates a new LogAnalyticsQuerySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *LogAnalyticsQuerySettingsConfig) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *LogAnalyticsQuerySettingsConfig) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *LogAnalyticsQuerySettingsConfig) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *LogAnalyticsQuerySettingsConfig) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetTenantId

`func (o *LogAnalyticsQuerySettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *LogAnalyticsQuerySettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *LogAnalyticsQuerySettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *LogAnalyticsQuerySettingsConfig) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetWorkspaceId

`func (o *LogAnalyticsQuerySettingsConfig) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *LogAnalyticsQuerySettingsConfig) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *LogAnalyticsQuerySettingsConfig) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.

### HasWorkspaceId

`func (o *LogAnalyticsQuerySettingsConfig) HasWorkspaceId() bool`

HasWorkspaceId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


