# ModelsSharedResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentType** | Pointer to **string** | Component kind (input/output/transform/enrichment); components only. | [optional] 
**Description** | Pointer to **string** | Description of the resource, when set. | [optional] 
**ExplicitTargetCount** | Pointer to **int32** | Number of explicit per-child share rows for this resource. | [optional] 
**LastSharedAt** | Pointer to **string** | Most recent time any share row for this resource was created. | [optional] 
**Name** | Pointer to **string** | Name of the resource. | [optional] 
**ResourceId** | Pointer to **string** | Identifier of the shared secret or component. | [optional] 
**ResourceType** | Pointer to **string** | Type of the shared resource: \&quot;secret\&quot; or \&quot;component\&quot;. | [optional] 
**ShareWithAllNewChildren** | Pointer to **bool** | Whether the resource&#39;s policy auto-shares it with new direct children. | [optional] 
**SubType** | Pointer to **string** | Concrete connector kind; components only. | [optional] 

## Methods

### NewModelsSharedResource

`func NewModelsSharedResource() *ModelsSharedResource`

NewModelsSharedResource instantiates a new ModelsSharedResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsSharedResourceWithDefaults

`func NewModelsSharedResourceWithDefaults() *ModelsSharedResource`

NewModelsSharedResourceWithDefaults instantiates a new ModelsSharedResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComponentType

`func (o *ModelsSharedResource) GetComponentType() string`

GetComponentType returns the ComponentType field if non-nil, zero value otherwise.

### GetComponentTypeOk

`func (o *ModelsSharedResource) GetComponentTypeOk() (*string, bool)`

GetComponentTypeOk returns a tuple with the ComponentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentType

`func (o *ModelsSharedResource) SetComponentType(v string)`

SetComponentType sets ComponentType field to given value.

### HasComponentType

`func (o *ModelsSharedResource) HasComponentType() bool`

HasComponentType returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsSharedResource) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsSharedResource) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsSharedResource) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsSharedResource) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExplicitTargetCount

`func (o *ModelsSharedResource) GetExplicitTargetCount() int32`

GetExplicitTargetCount returns the ExplicitTargetCount field if non-nil, zero value otherwise.

### GetExplicitTargetCountOk

`func (o *ModelsSharedResource) GetExplicitTargetCountOk() (*int32, bool)`

GetExplicitTargetCountOk returns a tuple with the ExplicitTargetCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExplicitTargetCount

`func (o *ModelsSharedResource) SetExplicitTargetCount(v int32)`

SetExplicitTargetCount sets ExplicitTargetCount field to given value.

### HasExplicitTargetCount

`func (o *ModelsSharedResource) HasExplicitTargetCount() bool`

HasExplicitTargetCount returns a boolean if a field has been set.

### GetLastSharedAt

`func (o *ModelsSharedResource) GetLastSharedAt() string`

GetLastSharedAt returns the LastSharedAt field if non-nil, zero value otherwise.

### GetLastSharedAtOk

`func (o *ModelsSharedResource) GetLastSharedAtOk() (*string, bool)`

GetLastSharedAtOk returns a tuple with the LastSharedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSharedAt

`func (o *ModelsSharedResource) SetLastSharedAt(v string)`

SetLastSharedAt sets LastSharedAt field to given value.

### HasLastSharedAt

`func (o *ModelsSharedResource) HasLastSharedAt() bool`

HasLastSharedAt returns a boolean if a field has been set.

### GetName

`func (o *ModelsSharedResource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsSharedResource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsSharedResource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsSharedResource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetResourceId

`func (o *ModelsSharedResource) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *ModelsSharedResource) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *ModelsSharedResource) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *ModelsSharedResource) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetResourceType

`func (o *ModelsSharedResource) GetResourceType() string`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *ModelsSharedResource) GetResourceTypeOk() (*string, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *ModelsSharedResource) SetResourceType(v string)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *ModelsSharedResource) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.

### GetShareWithAllNewChildren

`func (o *ModelsSharedResource) GetShareWithAllNewChildren() bool`

GetShareWithAllNewChildren returns the ShareWithAllNewChildren field if non-nil, zero value otherwise.

### GetShareWithAllNewChildrenOk

`func (o *ModelsSharedResource) GetShareWithAllNewChildrenOk() (*bool, bool)`

GetShareWithAllNewChildrenOk returns a tuple with the ShareWithAllNewChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareWithAllNewChildren

`func (o *ModelsSharedResource) SetShareWithAllNewChildren(v bool)`

SetShareWithAllNewChildren sets ShareWithAllNewChildren field to given value.

### HasShareWithAllNewChildren

`func (o *ModelsSharedResource) HasShareWithAllNewChildren() bool`

HasShareWithAllNewChildren returns a boolean if a field has been set.

### GetSubType

`func (o *ModelsSharedResource) GetSubType() string`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *ModelsSharedResource) GetSubTypeOk() (*string, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *ModelsSharedResource) SetSubType(v string)`

SetSubType sets SubType field to given value.

### HasSubType

`func (o *ModelsSharedResource) HasSubType() bool`

HasSubType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


