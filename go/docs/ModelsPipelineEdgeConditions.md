# ModelsPipelineEdgeConditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**[]ModelsPipelineEdgeCondition**](ModelsPipelineEdgeCondition.md) |  | [optional] 
**Operator** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsPipelineEdgeConditions

`func NewModelsPipelineEdgeConditions() *ModelsPipelineEdgeConditions`

NewModelsPipelineEdgeConditions instantiates a new ModelsPipelineEdgeConditions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsPipelineEdgeConditionsWithDefaults

`func NewModelsPipelineEdgeConditionsWithDefaults() *ModelsPipelineEdgeConditions`

NewModelsPipelineEdgeConditionsWithDefaults instantiates a new ModelsPipelineEdgeConditions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *ModelsPipelineEdgeConditions) GetConditions() []ModelsPipelineEdgeCondition`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *ModelsPipelineEdgeConditions) GetConditionsOk() (*[]ModelsPipelineEdgeCondition, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *ModelsPipelineEdgeConditions) SetConditions(v []ModelsPipelineEdgeCondition)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *ModelsPipelineEdgeConditions) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetOperator

`func (o *ModelsPipelineEdgeConditions) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *ModelsPipelineEdgeConditions) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *ModelsPipelineEdgeConditions) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *ModelsPipelineEdgeConditions) HasOperator() bool`

HasOperator returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


