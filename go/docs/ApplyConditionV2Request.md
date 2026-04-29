# ApplyConditionV2Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Condition** | Pointer to [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**Record** | Pointer to **[]int32** |  | [optional] 

## Methods

### NewApplyConditionV2Request

`func NewApplyConditionV2Request() *ApplyConditionV2Request`

NewApplyConditionV2Request instantiates a new ApplyConditionV2Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplyConditionV2RequestWithDefaults

`func NewApplyConditionV2RequestWithDefaults() *ApplyConditionV2Request`

NewApplyConditionV2RequestWithDefaults instantiates a new ApplyConditionV2Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCondition

`func (o *ApplyConditionV2Request) GetCondition() ModelsConditionEvaluatable`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *ApplyConditionV2Request) GetConditionOk() (*ModelsConditionEvaluatable, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *ApplyConditionV2Request) SetCondition(v ModelsConditionEvaluatable)`

SetCondition sets Condition field to given value.

### HasCondition

`func (o *ApplyConditionV2Request) HasCondition() bool`

HasCondition returns a boolean if a field has been set.

### GetRecord

`func (o *ApplyConditionV2Request) GetRecord() []int32`

GetRecord returns the Record field if non-nil, zero value otherwise.

### GetRecordOk

`func (o *ApplyConditionV2Request) GetRecordOk() (*[]int32, bool)`

GetRecordOk returns a tuple with the Record field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecord

`func (o *ApplyConditionV2Request) SetRecord(v []int32)`

SetRecord sets Record field to given value.

### HasRecord

`func (o *ApplyConditionV2Request) HasRecord() bool`

HasRecord returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


