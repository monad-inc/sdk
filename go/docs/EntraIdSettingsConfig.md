# EntraIdSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to **string** | The Category of logs to query | [optional] 
**TenantId** | Pointer to **string** | The tenant ID of the Azure AD application | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**WorkspaceId** | Pointer to **string** | The workspace ID of the Log Analytics workspace | [optional] 

## Methods

### NewEntraIdSettingsConfig

`func NewEntraIdSettingsConfig() *EntraIdSettingsConfig`

NewEntraIdSettingsConfig instantiates a new EntraIdSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntraIdSettingsConfigWithDefaults

`func NewEntraIdSettingsConfigWithDefaults() *EntraIdSettingsConfig`

NewEntraIdSettingsConfigWithDefaults instantiates a new EntraIdSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *EntraIdSettingsConfig) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *EntraIdSettingsConfig) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *EntraIdSettingsConfig) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *EntraIdSettingsConfig) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetTenantId

`func (o *EntraIdSettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *EntraIdSettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *EntraIdSettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *EntraIdSettingsConfig) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *EntraIdSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *EntraIdSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *EntraIdSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *EntraIdSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetWorkspaceId

`func (o *EntraIdSettingsConfig) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *EntraIdSettingsConfig) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *EntraIdSettingsConfig) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.

### HasWorkspaceId

`func (o *EntraIdSettingsConfig) HasWorkspaceId() bool`

HasWorkspaceId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


