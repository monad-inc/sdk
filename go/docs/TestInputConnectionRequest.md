# TestInputConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorInputConfig**](SecretProcessesorInputConfig.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewTestInputConnectionRequest

`func NewTestInputConnectionRequest() *TestInputConnectionRequest`

NewTestInputConnectionRequest instantiates a new TestInputConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestInputConnectionRequestWithDefaults

`func NewTestInputConnectionRequestWithDefaults() *TestInputConnectionRequest`

NewTestInputConnectionRequestWithDefaults instantiates a new TestInputConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *TestInputConnectionRequest) GetConfig() SecretProcessesorInputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *TestInputConnectionRequest) GetConfigOk() (*SecretProcessesorInputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *TestInputConnectionRequest) SetConfig(v SecretProcessesorInputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *TestInputConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetType

`func (o *TestInputConnectionRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TestInputConnectionRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TestInputConnectionRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TestInputConnectionRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


