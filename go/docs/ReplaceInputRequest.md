# ReplaceInputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorInputConfig**](SecretProcessesorInputConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewReplaceInputRequest

`func NewReplaceInputRequest() *ReplaceInputRequest`

NewReplaceInputRequest instantiates a new ReplaceInputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplaceInputRequestWithDefaults

`func NewReplaceInputRequestWithDefaults() *ReplaceInputRequest`

NewReplaceInputRequestWithDefaults instantiates a new ReplaceInputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *ReplaceInputRequest) GetConfig() SecretProcessesorInputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *ReplaceInputRequest) GetConfigOk() (*SecretProcessesorInputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *ReplaceInputRequest) SetConfig(v SecretProcessesorInputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *ReplaceInputRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *ReplaceInputRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReplaceInputRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReplaceInputRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReplaceInputRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *ReplaceInputRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReplaceInputRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReplaceInputRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReplaceInputRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ReplaceInputRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReplaceInputRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReplaceInputRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ReplaceInputRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


