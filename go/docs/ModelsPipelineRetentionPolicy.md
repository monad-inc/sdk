# ModelsPipelineRetentionPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamAgeLimit** | Pointer to **int32** |  | [optional] 
**StreamReplicas** | Pointer to **int32** |  | [optional] 
**StreamSizeLimit** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsPipelineRetentionPolicy

`func NewModelsPipelineRetentionPolicy() *ModelsPipelineRetentionPolicy`

NewModelsPipelineRetentionPolicy instantiates a new ModelsPipelineRetentionPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsPipelineRetentionPolicyWithDefaults

`func NewModelsPipelineRetentionPolicyWithDefaults() *ModelsPipelineRetentionPolicy`

NewModelsPipelineRetentionPolicyWithDefaults instantiates a new ModelsPipelineRetentionPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamAgeLimit

`func (o *ModelsPipelineRetentionPolicy) GetStreamAgeLimit() int32`

GetStreamAgeLimit returns the StreamAgeLimit field if non-nil, zero value otherwise.

### GetStreamAgeLimitOk

`func (o *ModelsPipelineRetentionPolicy) GetStreamAgeLimitOk() (*int32, bool)`

GetStreamAgeLimitOk returns a tuple with the StreamAgeLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamAgeLimit

`func (o *ModelsPipelineRetentionPolicy) SetStreamAgeLimit(v int32)`

SetStreamAgeLimit sets StreamAgeLimit field to given value.

### HasStreamAgeLimit

`func (o *ModelsPipelineRetentionPolicy) HasStreamAgeLimit() bool`

HasStreamAgeLimit returns a boolean if a field has been set.

### GetStreamReplicas

`func (o *ModelsPipelineRetentionPolicy) GetStreamReplicas() int32`

GetStreamReplicas returns the StreamReplicas field if non-nil, zero value otherwise.

### GetStreamReplicasOk

`func (o *ModelsPipelineRetentionPolicy) GetStreamReplicasOk() (*int32, bool)`

GetStreamReplicasOk returns a tuple with the StreamReplicas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamReplicas

`func (o *ModelsPipelineRetentionPolicy) SetStreamReplicas(v int32)`

SetStreamReplicas sets StreamReplicas field to given value.

### HasStreamReplicas

`func (o *ModelsPipelineRetentionPolicy) HasStreamReplicas() bool`

HasStreamReplicas returns a boolean if a field has been set.

### GetStreamSizeLimit

`func (o *ModelsPipelineRetentionPolicy) GetStreamSizeLimit() string`

GetStreamSizeLimit returns the StreamSizeLimit field if non-nil, zero value otherwise.

### GetStreamSizeLimitOk

`func (o *ModelsPipelineRetentionPolicy) GetStreamSizeLimitOk() (*string, bool)`

GetStreamSizeLimitOk returns a tuple with the StreamSizeLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamSizeLimit

`func (o *ModelsPipelineRetentionPolicy) SetStreamSizeLimit(v string)`

SetStreamSizeLimit sets StreamSizeLimit field to given value.

### HasStreamSizeLimit

`func (o *ModelsPipelineRetentionPolicy) HasStreamSizeLimit() bool`

HasStreamSizeLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


