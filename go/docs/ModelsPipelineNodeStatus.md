# ModelsPipelineNodeStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentType** | Pointer to **string** |  | [optional] 
**ComponentTypeId** | Pointer to **string** |  | [optional] 
**Egress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**Errors** | Pointer to **int32** |  | [optional] 
**ExpiredMessages** | Pointer to **int32** |  | [optional] 
**Ingress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**NodeId** | Pointer to **string** |  | [optional] 
**NodeSlug** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsPipelineNodeStatus

`func NewModelsPipelineNodeStatus() *ModelsPipelineNodeStatus`

NewModelsPipelineNodeStatus instantiates a new ModelsPipelineNodeStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsPipelineNodeStatusWithDefaults

`func NewModelsPipelineNodeStatusWithDefaults() *ModelsPipelineNodeStatus`

NewModelsPipelineNodeStatusWithDefaults instantiates a new ModelsPipelineNodeStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComponentType

`func (o *ModelsPipelineNodeStatus) GetComponentType() string`

GetComponentType returns the ComponentType field if non-nil, zero value otherwise.

### GetComponentTypeOk

`func (o *ModelsPipelineNodeStatus) GetComponentTypeOk() (*string, bool)`

GetComponentTypeOk returns a tuple with the ComponentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentType

`func (o *ModelsPipelineNodeStatus) SetComponentType(v string)`

SetComponentType sets ComponentType field to given value.

### HasComponentType

`func (o *ModelsPipelineNodeStatus) HasComponentType() bool`

HasComponentType returns a boolean if a field has been set.

### GetComponentTypeId

`func (o *ModelsPipelineNodeStatus) GetComponentTypeId() string`

GetComponentTypeId returns the ComponentTypeId field if non-nil, zero value otherwise.

### GetComponentTypeIdOk

`func (o *ModelsPipelineNodeStatus) GetComponentTypeIdOk() (*string, bool)`

GetComponentTypeIdOk returns a tuple with the ComponentTypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentTypeId

`func (o *ModelsPipelineNodeStatus) SetComponentTypeId(v string)`

SetComponentTypeId sets ComponentTypeId field to given value.

### HasComponentTypeId

`func (o *ModelsPipelineNodeStatus) HasComponentTypeId() bool`

HasComponentTypeId returns a boolean if a field has been set.

### GetEgress

`func (o *ModelsPipelineNodeStatus) GetEgress() ModelsDataUsage`

GetEgress returns the Egress field if non-nil, zero value otherwise.

### GetEgressOk

`func (o *ModelsPipelineNodeStatus) GetEgressOk() (*ModelsDataUsage, bool)`

GetEgressOk returns a tuple with the Egress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgress

`func (o *ModelsPipelineNodeStatus) SetEgress(v ModelsDataUsage)`

SetEgress sets Egress field to given value.

### HasEgress

`func (o *ModelsPipelineNodeStatus) HasEgress() bool`

HasEgress returns a boolean if a field has been set.

### GetErrors

`func (o *ModelsPipelineNodeStatus) GetErrors() int32`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ModelsPipelineNodeStatus) GetErrorsOk() (*int32, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ModelsPipelineNodeStatus) SetErrors(v int32)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ModelsPipelineNodeStatus) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetExpiredMessages

`func (o *ModelsPipelineNodeStatus) GetExpiredMessages() int32`

GetExpiredMessages returns the ExpiredMessages field if non-nil, zero value otherwise.

### GetExpiredMessagesOk

`func (o *ModelsPipelineNodeStatus) GetExpiredMessagesOk() (*int32, bool)`

GetExpiredMessagesOk returns a tuple with the ExpiredMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiredMessages

`func (o *ModelsPipelineNodeStatus) SetExpiredMessages(v int32)`

SetExpiredMessages sets ExpiredMessages field to given value.

### HasExpiredMessages

`func (o *ModelsPipelineNodeStatus) HasExpiredMessages() bool`

HasExpiredMessages returns a boolean if a field has been set.

### GetIngress

`func (o *ModelsPipelineNodeStatus) GetIngress() ModelsDataUsage`

GetIngress returns the Ingress field if non-nil, zero value otherwise.

### GetIngressOk

`func (o *ModelsPipelineNodeStatus) GetIngressOk() (*ModelsDataUsage, bool)`

GetIngressOk returns a tuple with the Ingress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngress

`func (o *ModelsPipelineNodeStatus) SetIngress(v ModelsDataUsage)`

SetIngress sets Ingress field to given value.

### HasIngress

`func (o *ModelsPipelineNodeStatus) HasIngress() bool`

HasIngress returns a boolean if a field has been set.

### GetNodeId

`func (o *ModelsPipelineNodeStatus) GetNodeId() string`

GetNodeId returns the NodeId field if non-nil, zero value otherwise.

### GetNodeIdOk

`func (o *ModelsPipelineNodeStatus) GetNodeIdOk() (*string, bool)`

GetNodeIdOk returns a tuple with the NodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodeId

`func (o *ModelsPipelineNodeStatus) SetNodeId(v string)`

SetNodeId sets NodeId field to given value.

### HasNodeId

`func (o *ModelsPipelineNodeStatus) HasNodeId() bool`

HasNodeId returns a boolean if a field has been set.

### GetNodeSlug

`func (o *ModelsPipelineNodeStatus) GetNodeSlug() string`

GetNodeSlug returns the NodeSlug field if non-nil, zero value otherwise.

### GetNodeSlugOk

`func (o *ModelsPipelineNodeStatus) GetNodeSlugOk() (*string, bool)`

GetNodeSlugOk returns a tuple with the NodeSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodeSlug

`func (o *ModelsPipelineNodeStatus) SetNodeSlug(v string)`

SetNodeSlug sets NodeSlug field to given value.

### HasNodeSlug

`func (o *ModelsPipelineNodeStatus) HasNodeSlug() bool`

HasNodeSlug returns a boolean if a field has been set.

### GetStatus

`func (o *ModelsPipelineNodeStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ModelsPipelineNodeStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ModelsPipelineNodeStatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ModelsPipelineNodeStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


