# HydrolixPasswordAuth

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | [**ModelsSecret**](ModelsSecret.md) |  | 
**Username** | **string** | Hydrolix user account username. | 

## Methods

### NewHydrolixPasswordAuth

`func NewHydrolixPasswordAuth(password ModelsSecret, username string, ) *HydrolixPasswordAuth`

NewHydrolixPasswordAuth instantiates a new HydrolixPasswordAuth object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHydrolixPasswordAuthWithDefaults

`func NewHydrolixPasswordAuthWithDefaults() *HydrolixPasswordAuth`

NewHydrolixPasswordAuthWithDefaults instantiates a new HydrolixPasswordAuth object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPassword

`func (o *HydrolixPasswordAuth) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *HydrolixPasswordAuth) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *HydrolixPasswordAuth) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.


### GetUsername

`func (o *HydrolixPasswordAuth) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *HydrolixPasswordAuth) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *HydrolixPasswordAuth) SetUsername(v string)`

SetUsername sets Username field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


