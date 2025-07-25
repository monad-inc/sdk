# ModelsPipelineStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Egress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**Errors** | Pointer to **int32** |  | [optional] 
**ExpiredMessages** | Pointer to **int32** |  | [optional] 
**Ingress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**Nodes** | Pointer to [**[]ModelsPipelineNodeStatus**](ModelsPipelineNodeStatus.md) |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**OrganizationName** | Pointer to **string** |  | [optional] 
**PipelineId** | Pointer to **string** |  | [optional] 
**PipelineName** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsPipelineStatus

`func NewModelsPipelineStatus() *ModelsPipelineStatus`

NewModelsPipelineStatus instantiates a new ModelsPipelineStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsPipelineStatusWithDefaults

`func NewModelsPipelineStatusWithDefaults() *ModelsPipelineStatus`

NewModelsPipelineStatusWithDefaults instantiates a new ModelsPipelineStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEgress

`func (o *ModelsPipelineStatus) GetEgress() ModelsDataUsage`

GetEgress returns the Egress field if non-nil, zero value otherwise.

### GetEgressOk

`func (o *ModelsPipelineStatus) GetEgressOk() (*ModelsDataUsage, bool)`

GetEgressOk returns a tuple with the Egress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEgress

`func (o *ModelsPipelineStatus) SetEgress(v ModelsDataUsage)`

SetEgress sets Egress field to given value.

### HasEgress

`func (o *ModelsPipelineStatus) HasEgress() bool`

HasEgress returns a boolean if a field has been set.

### GetErrors

`func (o *ModelsPipelineStatus) GetErrors() int32`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ModelsPipelineStatus) GetErrorsOk() (*int32, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ModelsPipelineStatus) SetErrors(v int32)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ModelsPipelineStatus) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetExpiredMessages

`func (o *ModelsPipelineStatus) GetExpiredMessages() int32`

GetExpiredMessages returns the ExpiredMessages field if non-nil, zero value otherwise.

### GetExpiredMessagesOk

`func (o *ModelsPipelineStatus) GetExpiredMessagesOk() (*int32, bool)`

GetExpiredMessagesOk returns a tuple with the ExpiredMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiredMessages

`func (o *ModelsPipelineStatus) SetExpiredMessages(v int32)`

SetExpiredMessages sets ExpiredMessages field to given value.

### HasExpiredMessages

`func (o *ModelsPipelineStatus) HasExpiredMessages() bool`

HasExpiredMessages returns a boolean if a field has been set.

### GetIngress

`func (o *ModelsPipelineStatus) GetIngress() ModelsDataUsage`

GetIngress returns the Ingress field if non-nil, zero value otherwise.

### GetIngressOk

`func (o *ModelsPipelineStatus) GetIngressOk() (*ModelsDataUsage, bool)`

GetIngressOk returns a tuple with the Ingress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngress

`func (o *ModelsPipelineStatus) SetIngress(v ModelsDataUsage)`

SetIngress sets Ingress field to given value.

### HasIngress

`func (o *ModelsPipelineStatus) HasIngress() bool`

HasIngress returns a boolean if a field has been set.

### GetNodes

`func (o *ModelsPipelineStatus) GetNodes() []ModelsPipelineNodeStatus`

GetNodes returns the Nodes field if non-nil, zero value otherwise.

### GetNodesOk

`func (o *ModelsPipelineStatus) GetNodesOk() (*[]ModelsPipelineNodeStatus, bool)`

GetNodesOk returns a tuple with the Nodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodes

`func (o *ModelsPipelineStatus) SetNodes(v []ModelsPipelineNodeStatus)`

SetNodes sets Nodes field to given value.

### HasNodes

`func (o *ModelsPipelineStatus) HasNodes() bool`

HasNodes returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsPipelineStatus) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsPipelineStatus) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsPipelineStatus) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsPipelineStatus) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetOrganizationName

`func (o *ModelsPipelineStatus) GetOrganizationName() string`

GetOrganizationName returns the OrganizationName field if non-nil, zero value otherwise.

### GetOrganizationNameOk

`func (o *ModelsPipelineStatus) GetOrganizationNameOk() (*string, bool)`

GetOrganizationNameOk returns a tuple with the OrganizationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationName

`func (o *ModelsPipelineStatus) SetOrganizationName(v string)`

SetOrganizationName sets OrganizationName field to given value.

### HasOrganizationName

`func (o *ModelsPipelineStatus) HasOrganizationName() bool`

HasOrganizationName returns a boolean if a field has been set.

### GetPipelineId

`func (o *ModelsPipelineStatus) GetPipelineId() string`

GetPipelineId returns the PipelineId field if non-nil, zero value otherwise.

### GetPipelineIdOk

`func (o *ModelsPipelineStatus) GetPipelineIdOk() (*string, bool)`

GetPipelineIdOk returns a tuple with the PipelineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineId

`func (o *ModelsPipelineStatus) SetPipelineId(v string)`

SetPipelineId sets PipelineId field to given value.

### HasPipelineId

`func (o *ModelsPipelineStatus) HasPipelineId() bool`

HasPipelineId returns a boolean if a field has been set.

### GetPipelineName

`func (o *ModelsPipelineStatus) GetPipelineName() string`

GetPipelineName returns the PipelineName field if non-nil, zero value otherwise.

### GetPipelineNameOk

`func (o *ModelsPipelineStatus) GetPipelineNameOk() (*string, bool)`

GetPipelineNameOk returns a tuple with the PipelineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineName

`func (o *ModelsPipelineStatus) SetPipelineName(v string)`

SetPipelineName sets PipelineName field to given value.

### HasPipelineName

`func (o *ModelsPipelineStatus) HasPipelineName() bool`

HasPipelineName returns a boolean if a field has been set.

### GetStatus

`func (o *ModelsPipelineStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ModelsPipelineStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ModelsPipelineStatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ModelsPipelineStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


