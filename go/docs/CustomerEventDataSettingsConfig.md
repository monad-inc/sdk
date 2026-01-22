# CustomerEventDataSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from in RFC3339 format. If not specified, a full sync of data upto now would be performed on the first sync (since the previous 7 days). You must specify a backfill time to query for data for a time before 7 days. All syncs thereafter will be incremental. | [optional] 
**Environment** | Pointer to **string** | Determines the URI {environment}.docusign.com | [optional] 
**UserId** | Pointer to **string** | User id of the Docusign admin | [optional] 

## Methods

### NewCustomerEventDataSettingsConfig

`func NewCustomerEventDataSettingsConfig() *CustomerEventDataSettingsConfig`

NewCustomerEventDataSettingsConfig instantiates a new CustomerEventDataSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerEventDataSettingsConfigWithDefaults

`func NewCustomerEventDataSettingsConfigWithDefaults() *CustomerEventDataSettingsConfig`

NewCustomerEventDataSettingsConfigWithDefaults instantiates a new CustomerEventDataSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *CustomerEventDataSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *CustomerEventDataSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *CustomerEventDataSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *CustomerEventDataSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetEnvironment

`func (o *CustomerEventDataSettingsConfig) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *CustomerEventDataSettingsConfig) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *CustomerEventDataSettingsConfig) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *CustomerEventDataSettingsConfig) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetUserId

`func (o *CustomerEventDataSettingsConfig) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *CustomerEventDataSettingsConfig) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *CustomerEventDataSettingsConfig) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *CustomerEventDataSettingsConfig) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


