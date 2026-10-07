# GoogleWorkspaceSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthType** | Pointer to **string** | Authentication type (service_account or oauth) | [optional] 
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of data from google workspace is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**Email** | Pointer to **string** | Email address to use for authenticating with Google Cloud (required for service_account auth). | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewGoogleWorkspaceSettingsConfig

`func NewGoogleWorkspaceSettingsConfig() *GoogleWorkspaceSettingsConfig`

NewGoogleWorkspaceSettingsConfig instantiates a new GoogleWorkspaceSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGoogleWorkspaceSettingsConfigWithDefaults

`func NewGoogleWorkspaceSettingsConfigWithDefaults() *GoogleWorkspaceSettingsConfig`

NewGoogleWorkspaceSettingsConfigWithDefaults instantiates a new GoogleWorkspaceSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthType

`func (o *GoogleWorkspaceSettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *GoogleWorkspaceSettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *GoogleWorkspaceSettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *GoogleWorkspaceSettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *GoogleWorkspaceSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *GoogleWorkspaceSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *GoogleWorkspaceSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *GoogleWorkspaceSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetEmail

`func (o *GoogleWorkspaceSettingsConfig) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *GoogleWorkspaceSettingsConfig) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *GoogleWorkspaceSettingsConfig) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *GoogleWorkspaceSettingsConfig) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *GoogleWorkspaceSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *GoogleWorkspaceSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *GoogleWorkspaceSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *GoogleWorkspaceSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


