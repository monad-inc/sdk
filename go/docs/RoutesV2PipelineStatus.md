# RoutesV2PipelineStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Egress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**Errors** | Pointer to **int32** |  | [optional] 
**ExpiredMessages** | Pointer to **int32** |  | [optional] 
**Ingress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**PipelineId** | **string** |  | 
**PipelineName** | **string** |  | 
**Status** | **string** |  | 

## Methods

### NewRoutesV2PipelineStatus

`func NewRoutesV2PipelineStatus(pipelineId string, pipelineName string, status string, ) *RoutesV2PipelineStatus`

NewRoutesV2PipelineStatus instantiates a new RoutesV2PipelineStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2PipelineStatusWithDefaults

`func NewRoutesV2PipelineStatusWithDefaults() *RoutesV2PipelineStatus`

NewRoutesV2PipelineStatusWithDefaults instantiates a new RoutesV2PipelineStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEgress

`func (o *RoutesV2PipelineStatus) GetEgress() ModelsDataUsage`

GetEgress returns the Egress field if non-nil, zero value otherwise.

### GetEgressOk

`func (o *RoutesV2PipelineStatus) GetEgressOk() (*ModelsDataUsage, bool)`

GetEgressOk returns a tuple with the Egress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgress

`func (o *RoutesV2PipelineStatus) SetEgress(v ModelsDataUsage)`

SetEgress sets Egress field to given value.

### HasEgress

`func (o *RoutesV2PipelineStatus) HasEgress() bool`

HasEgress returns a boolean if a field has been set.

### GetErrors

`func (o *RoutesV2PipelineStatus) GetErrors() int32`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *RoutesV2PipelineStatus) GetErrorsOk() (*int32, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *RoutesV2PipelineStatus) SetErrors(v int32)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *RoutesV2PipelineStatus) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetExpiredMessages

`func (o *RoutesV2PipelineStatus) GetExpiredMessages() int32`

GetExpiredMessages returns the ExpiredMessages field if non-nil, zero value otherwise.

### GetExpiredMessagesOk

`func (o *RoutesV2PipelineStatus) GetExpiredMessagesOk() (*int32, bool)`

GetExpiredMessagesOk returns a tuple with the ExpiredMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiredMessages

`func (o *RoutesV2PipelineStatus) SetExpiredMessages(v int32)`

SetExpiredMessages sets ExpiredMessages field to given value.

### HasExpiredMessages

`func (o *RoutesV2PipelineStatus) HasExpiredMessages() bool`

HasExpiredMessages returns a boolean if a field has been set.

### GetIngress

`func (o *RoutesV2PipelineStatus) GetIngress() ModelsDataUsage`

GetIngress returns the Ingress field if non-nil, zero value otherwise.

### GetIngressOk

`func (o *RoutesV2PipelineStatus) GetIngressOk() (*ModelsDataUsage, bool)`

GetIngressOk returns a tuple with the Ingress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngress

`func (o *RoutesV2PipelineStatus) SetIngress(v ModelsDataUsage)`

SetIngress sets Ingress field to given value.

### HasIngress

`func (o *RoutesV2PipelineStatus) HasIngress() bool`

HasIngress returns a boolean if a field has been set.

### GetPipelineId

`func (o *RoutesV2PipelineStatus) GetPipelineId() string`

GetPipelineId returns the PipelineId field if non-nil, zero value otherwise.

### GetPipelineIdOk

`func (o *RoutesV2PipelineStatus) GetPipelineIdOk() (*string, bool)`

GetPipelineIdOk returns a tuple with the PipelineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineId

`func (o *RoutesV2PipelineStatus) SetPipelineId(v string)`

SetPipelineId sets PipelineId field to given value.


### GetPipelineName

`func (o *RoutesV2PipelineStatus) GetPipelineName() string`

GetPipelineName returns the PipelineName field if non-nil, zero value otherwise.

### GetPipelineNameOk

`func (o *RoutesV2PipelineStatus) GetPipelineNameOk() (*string, bool)`

GetPipelineNameOk returns a tuple with the PipelineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineName

`func (o *RoutesV2PipelineStatus) SetPipelineName(v string)`

SetPipelineName sets PipelineName field to given value.


### GetStatus

`func (o *RoutesV2PipelineStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoutesV2PipelineStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoutesV2PipelineStatus) SetStatus(v string)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


