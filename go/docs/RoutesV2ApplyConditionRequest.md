# RoutesV2ApplyConditionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Condition** | Pointer to [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**Record** | Pointer to **[]int32** |  | [optional] 

## Methods

### NewRoutesV2ApplyConditionRequest

`func NewRoutesV2ApplyConditionRequest() *RoutesV2ApplyConditionRequest`

NewRoutesV2ApplyConditionRequest instantiates a new RoutesV2ApplyConditionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2ApplyConditionRequestWithDefaults

`func NewRoutesV2ApplyConditionRequestWithDefaults() *RoutesV2ApplyConditionRequest`

NewRoutesV2ApplyConditionRequestWithDefaults instantiates a new RoutesV2ApplyConditionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCondition

`func (o *RoutesV2ApplyConditionRequest) GetCondition() ModelsConditionEvaluatable`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *RoutesV2ApplyConditionRequest) GetConditionOk() (*ModelsConditionEvaluatable, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *RoutesV2ApplyConditionRequest) SetCondition(v ModelsConditionEvaluatable)`

SetCondition sets Condition field to given value.

### HasCondition

`func (o *RoutesV2ApplyConditionRequest) HasCondition() bool`

HasCondition returns a boolean if a field has been set.

### GetRecord

`func (o *RoutesV2ApplyConditionRequest) GetRecord() []int32`

GetRecord returns the Record field if non-nil, zero value otherwise.

### GetRecordOk

`func (o *RoutesV2ApplyConditionRequest) GetRecordOk() (*[]int32, bool)`

GetRecordOk returns a tuple with the Record field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecord

`func (o *RoutesV2ApplyConditionRequest) SetRecord(v []int32)`

SetRecord sets Record field to given value.

### HasRecord

`func (o *RoutesV2ApplyConditionRequest) HasRecord() bool`

HasRecord returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


