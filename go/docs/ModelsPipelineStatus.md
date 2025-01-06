# ModelsPipelineStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Egress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**Ingress** | Pointer to [**ModelsDataUsage**](ModelsDataUsage.md) |  | [optional] 
**Nodes** | Pointer to [**[]ModelsPipelineNodeStatus**](ModelsPipelineNodeStatus.md) |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**PipelineId** | Pointer to **string** |  | [optional] 
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


