# ModelsPipelineConfigV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingAccountId** | Pointer to **string** |  | [optional] 
**ComponentTier** | Pointer to **int32** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Edges** | Pointer to [**[]ModelsPipelineEdge**](ModelsPipelineEdge.md) |  | [optional] 
**Enabled** | Pointer to **bool** |  | [optional] 
**Endpoint** | Pointer to **string** |  | [optional] 
**EndpointHash** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Nodes** | Pointer to [**[]ModelsPipelineNode**](ModelsPipelineNode.md) |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**OrganizationName** | Pointer to **string** |  | [optional] 
**RetentionPolicy** | Pointer to [**ModelsPipelineRetentionPolicy**](ModelsPipelineRetentionPolicy.md) |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsPipelineConfigV2

`func NewModelsPipelineConfigV2() *ModelsPipelineConfigV2`

NewModelsPipelineConfigV2 instantiates a new ModelsPipelineConfigV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsPipelineConfigV2WithDefaults

`func NewModelsPipelineConfigV2WithDefaults() *ModelsPipelineConfigV2`

NewModelsPipelineConfigV2WithDefaults instantiates a new ModelsPipelineConfigV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingAccountId

`func (o *ModelsPipelineConfigV2) GetBillingAccountId() string`

GetBillingAccountId returns the BillingAccountId field if non-nil, zero value otherwise.

### GetBillingAccountIdOk

`func (o *ModelsPipelineConfigV2) GetBillingAccountIdOk() (*string, bool)`

GetBillingAccountIdOk returns a tuple with the BillingAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingAccountId

`func (o *ModelsPipelineConfigV2) SetBillingAccountId(v string)`

SetBillingAccountId sets BillingAccountId field to given value.

### HasBillingAccountId

`func (o *ModelsPipelineConfigV2) HasBillingAccountId() bool`

HasBillingAccountId returns a boolean if a field has been set.

### GetComponentTier

`func (o *ModelsPipelineConfigV2) GetComponentTier() int32`

GetComponentTier returns the ComponentTier field if non-nil, zero value otherwise.

### GetComponentTierOk

`func (o *ModelsPipelineConfigV2) GetComponentTierOk() (*int32, bool)`

GetComponentTierOk returns a tuple with the ComponentTier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentTier

`func (o *ModelsPipelineConfigV2) SetComponentTier(v int32)`

SetComponentTier sets ComponentTier field to given value.

### HasComponentTier

`func (o *ModelsPipelineConfigV2) HasComponentTier() bool`

HasComponentTier returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ModelsPipelineConfigV2) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsPipelineConfigV2) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsPipelineConfigV2) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsPipelineConfigV2) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsPipelineConfigV2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsPipelineConfigV2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsPipelineConfigV2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsPipelineConfigV2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEdges

`func (o *ModelsPipelineConfigV2) GetEdges() []ModelsPipelineEdge`

GetEdges returns the Edges field if non-nil, zero value otherwise.

### GetEdgesOk

`func (o *ModelsPipelineConfigV2) GetEdgesOk() (*[]ModelsPipelineEdge, bool)`

GetEdgesOk returns a tuple with the Edges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEdges

`func (o *ModelsPipelineConfigV2) SetEdges(v []ModelsPipelineEdge)`

SetEdges sets Edges field to given value.

### HasEdges

`func (o *ModelsPipelineConfigV2) HasEdges() bool`

HasEdges returns a boolean if a field has been set.

### GetEnabled

`func (o *ModelsPipelineConfigV2) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ModelsPipelineConfigV2) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ModelsPipelineConfigV2) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ModelsPipelineConfigV2) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEndpoint

`func (o *ModelsPipelineConfigV2) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *ModelsPipelineConfigV2) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *ModelsPipelineConfigV2) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *ModelsPipelineConfigV2) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetEndpointHash

`func (o *ModelsPipelineConfigV2) GetEndpointHash() string`

GetEndpointHash returns the EndpointHash field if non-nil, zero value otherwise.

### GetEndpointHashOk

`func (o *ModelsPipelineConfigV2) GetEndpointHashOk() (*string, bool)`

GetEndpointHashOk returns a tuple with the EndpointHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointHash

`func (o *ModelsPipelineConfigV2) SetEndpointHash(v string)`

SetEndpointHash sets EndpointHash field to given value.

### HasEndpointHash

`func (o *ModelsPipelineConfigV2) HasEndpointHash() bool`

HasEndpointHash returns a boolean if a field has been set.

### GetId

`func (o *ModelsPipelineConfigV2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsPipelineConfigV2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsPipelineConfigV2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsPipelineConfigV2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ModelsPipelineConfigV2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsPipelineConfigV2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsPipelineConfigV2) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsPipelineConfigV2) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNodes

`func (o *ModelsPipelineConfigV2) GetNodes() []ModelsPipelineNode`

GetNodes returns the Nodes field if non-nil, zero value otherwise.

### GetNodesOk

`func (o *ModelsPipelineConfigV2) GetNodesOk() (*[]ModelsPipelineNode, bool)`

GetNodesOk returns a tuple with the Nodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodes

`func (o *ModelsPipelineConfigV2) SetNodes(v []ModelsPipelineNode)`

SetNodes sets Nodes field to given value.

### HasNodes

`func (o *ModelsPipelineConfigV2) HasNodes() bool`

HasNodes returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsPipelineConfigV2) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsPipelineConfigV2) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsPipelineConfigV2) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsPipelineConfigV2) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetOrganizationName

`func (o *ModelsPipelineConfigV2) GetOrganizationName() string`

GetOrganizationName returns the OrganizationName field if non-nil, zero value otherwise.

### GetOrganizationNameOk

`func (o *ModelsPipelineConfigV2) GetOrganizationNameOk() (*string, bool)`

GetOrganizationNameOk returns a tuple with the OrganizationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationName

`func (o *ModelsPipelineConfigV2) SetOrganizationName(v string)`

SetOrganizationName sets OrganizationName field to given value.

### HasOrganizationName

`func (o *ModelsPipelineConfigV2) HasOrganizationName() bool`

HasOrganizationName returns a boolean if a field has been set.

### GetRetentionPolicy

`func (o *ModelsPipelineConfigV2) GetRetentionPolicy() ModelsPipelineRetentionPolicy`

GetRetentionPolicy returns the RetentionPolicy field if non-nil, zero value otherwise.

### GetRetentionPolicyOk

`func (o *ModelsPipelineConfigV2) GetRetentionPolicyOk() (*ModelsPipelineRetentionPolicy, bool)`

GetRetentionPolicyOk returns a tuple with the RetentionPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetentionPolicy

`func (o *ModelsPipelineConfigV2) SetRetentionPolicy(v ModelsPipelineRetentionPolicy)`

SetRetentionPolicy sets RetentionPolicy field to given value.

### HasRetentionPolicy

`func (o *ModelsPipelineConfigV2) HasRetentionPolicy() bool`

HasRetentionPolicy returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ModelsPipelineConfigV2) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ModelsPipelineConfigV2) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ModelsPipelineConfigV2) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ModelsPipelineConfigV2) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


