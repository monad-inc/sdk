# TestOutputConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewTestOutputConnectionRequest

`func NewTestOutputConnectionRequest() *TestOutputConnectionRequest`

NewTestOutputConnectionRequest instantiates a new TestOutputConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestOutputConnectionRequestWithDefaults

`func NewTestOutputConnectionRequestWithDefaults() *TestOutputConnectionRequest`

NewTestOutputConnectionRequestWithDefaults instantiates a new TestOutputConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *TestOutputConnectionRequest) GetConfig() SecretProcessesorOutputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *TestOutputConnectionRequest) GetConfigOk() (*SecretProcessesorOutputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *TestOutputConnectionRequest) SetConfig(v SecretProcessesorOutputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *TestOutputConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetType

`func (o *TestOutputConnectionRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TestOutputConnectionRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TestOutputConnectionRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TestOutputConnectionRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


