# CreateOutputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**PromiseId** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewCreateOutputRequest

`func NewCreateOutputRequest() *CreateOutputRequest`

NewCreateOutputRequest instantiates a new CreateOutputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOutputRequestWithDefaults

`func NewCreateOutputRequestWithDefaults() *CreateOutputRequest`

NewCreateOutputRequestWithDefaults instantiates a new CreateOutputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *CreateOutputRequest) GetConfig() SecretProcessesorOutputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *CreateOutputRequest) GetConfigOk() (*SecretProcessesorOutputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *CreateOutputRequest) SetConfig(v SecretProcessesorOutputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *CreateOutputRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *CreateOutputRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateOutputRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateOutputRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateOutputRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *CreateOutputRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateOutputRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateOutputRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateOutputRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPromiseId

`func (o *CreateOutputRequest) GetPromiseId() string`

GetPromiseId returns the PromiseId field if non-nil, zero value otherwise.

### GetPromiseIdOk

`func (o *CreateOutputRequest) GetPromiseIdOk() (*string, bool)`

GetPromiseIdOk returns a tuple with the PromiseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromiseId

`func (o *CreateOutputRequest) SetPromiseId(v string)`

SetPromiseId sets PromiseId field to given value.

### HasPromiseId

`func (o *CreateOutputRequest) HasPromiseId() bool`

HasPromiseId returns a boolean if a field has been set.

### GetType

`func (o *CreateOutputRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateOutputRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateOutputRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreateOutputRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


