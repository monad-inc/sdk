# RoutesV2UpdateOutputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesV2UpdateOutputRequest

`func NewRoutesV2UpdateOutputRequest() *RoutesV2UpdateOutputRequest`

NewRoutesV2UpdateOutputRequest instantiates a new RoutesV2UpdateOutputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2UpdateOutputRequestWithDefaults

`func NewRoutesV2UpdateOutputRequestWithDefaults() *RoutesV2UpdateOutputRequest`

NewRoutesV2UpdateOutputRequestWithDefaults instantiates a new RoutesV2UpdateOutputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV2UpdateOutputRequest) GetConfig() SecretProcessesorOutputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV2UpdateOutputRequest) GetConfigOk() (*SecretProcessesorOutputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV2UpdateOutputRequest) SetConfig(v SecretProcessesorOutputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV2UpdateOutputRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV2UpdateOutputRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2UpdateOutputRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2UpdateOutputRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2UpdateOutputRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV2UpdateOutputRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2UpdateOutputRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2UpdateOutputRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV2UpdateOutputRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *RoutesV2UpdateOutputRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV2UpdateOutputRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV2UpdateOutputRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV2UpdateOutputRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


