# RoutesV2ApplyTransformationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**ModelsTransformConfig**](ModelsTransformConfig.md) |  | [optional] 
**Record** | Pointer to **[]int32** |  | [optional] 

## Methods

### NewRoutesV2ApplyTransformationRequest

`func NewRoutesV2ApplyTransformationRequest() *RoutesV2ApplyTransformationRequest`

NewRoutesV2ApplyTransformationRequest instantiates a new RoutesV2ApplyTransformationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2ApplyTransformationRequestWithDefaults

`func NewRoutesV2ApplyTransformationRequestWithDefaults() *RoutesV2ApplyTransformationRequest`

NewRoutesV2ApplyTransformationRequestWithDefaults instantiates a new RoutesV2ApplyTransformationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV2ApplyTransformationRequest) GetConfig() ModelsTransformConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV2ApplyTransformationRequest) GetConfigOk() (*ModelsTransformConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV2ApplyTransformationRequest) SetConfig(v ModelsTransformConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV2ApplyTransformationRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetRecord

`func (o *RoutesV2ApplyTransformationRequest) GetRecord() []int32`

GetRecord returns the Record field if non-nil, zero value otherwise.

### GetRecordOk

`func (o *RoutesV2ApplyTransformationRequest) GetRecordOk() (*[]int32, bool)`

GetRecordOk returns a tuple with the Record field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecord

`func (o *RoutesV2ApplyTransformationRequest) SetRecord(v []int32)`

SetRecord sets Record field to given value.

### HasRecord

`func (o *RoutesV2ApplyTransformationRequest) HasRecord() bool`

HasRecord returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


