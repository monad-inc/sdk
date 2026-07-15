# RoutesV3SharedResourceWithMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentType** | Pointer to **string** | Component kind (input/output/transform/enrichment); components only. | [optional] 
**Description** | Pointer to **string** | Description of the resource, when set. | [optional] 
**ExplicitTargetCount** | Pointer to **int32** | Number of explicit per-child share rows for this resource. | [optional] 
**LastSharedAt** | Pointer to **string** | Most recent time any share row for this resource was created. | [optional] 
**Name** | Pointer to **string** | Name of the resource. | [optional] 
**ResourceId** | Pointer to **string** | Identifier of the shared secret or component. | [optional] 
**ResourceMetadata** | Pointer to [**RoutesResourceMetadata**](RoutesResourceMetadata.md) |  | [optional] 
**ResourceType** | Pointer to **string** | Type of the shared resource: \&quot;secret\&quot; or \&quot;component\&quot;. | [optional] 
**ShareWithAllNewChildren** | Pointer to **bool** | Whether the resource&#39;s policy auto-shares it with new direct children. | [optional] 
**SubType** | Pointer to **string** | Concrete connector kind; components only. | [optional] 

## Methods

### NewRoutesV3SharedResourceWithMetadata

`func NewRoutesV3SharedResourceWithMetadata() *RoutesV3SharedResourceWithMetadata`

NewRoutesV3SharedResourceWithMetadata instantiates a new RoutesV3SharedResourceWithMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3SharedResourceWithMetadataWithDefaults

`func NewRoutesV3SharedResourceWithMetadataWithDefaults() *RoutesV3SharedResourceWithMetadata`

NewRoutesV3SharedResourceWithMetadataWithDefaults instantiates a new RoutesV3SharedResourceWithMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComponentType

`func (o *RoutesV3SharedResourceWithMetadata) GetComponentType() string`

GetComponentType returns the ComponentType field if non-nil, zero value otherwise.

### GetComponentTypeOk

`func (o *RoutesV3SharedResourceWithMetadata) GetComponentTypeOk() (*string, bool)`

GetComponentTypeOk returns a tuple with the ComponentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentType

`func (o *RoutesV3SharedResourceWithMetadata) SetComponentType(v string)`

SetComponentType sets ComponentType field to given value.

### HasComponentType

`func (o *RoutesV3SharedResourceWithMetadata) HasComponentType() bool`

HasComponentType returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3SharedResourceWithMetadata) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3SharedResourceWithMetadata) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3SharedResourceWithMetadata) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3SharedResourceWithMetadata) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExplicitTargetCount

`func (o *RoutesV3SharedResourceWithMetadata) GetExplicitTargetCount() int32`

GetExplicitTargetCount returns the ExplicitTargetCount field if non-nil, zero value otherwise.

### GetExplicitTargetCountOk

`func (o *RoutesV3SharedResourceWithMetadata) GetExplicitTargetCountOk() (*int32, bool)`

GetExplicitTargetCountOk returns a tuple with the ExplicitTargetCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExplicitTargetCount

`func (o *RoutesV3SharedResourceWithMetadata) SetExplicitTargetCount(v int32)`

SetExplicitTargetCount sets ExplicitTargetCount field to given value.

### HasExplicitTargetCount

`func (o *RoutesV3SharedResourceWithMetadata) HasExplicitTargetCount() bool`

HasExplicitTargetCount returns a boolean if a field has been set.

### GetLastSharedAt

`func (o *RoutesV3SharedResourceWithMetadata) GetLastSharedAt() string`

GetLastSharedAt returns the LastSharedAt field if non-nil, zero value otherwise.

### GetLastSharedAtOk

`func (o *RoutesV3SharedResourceWithMetadata) GetLastSharedAtOk() (*string, bool)`

GetLastSharedAtOk returns a tuple with the LastSharedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSharedAt

`func (o *RoutesV3SharedResourceWithMetadata) SetLastSharedAt(v string)`

SetLastSharedAt sets LastSharedAt field to given value.

### HasLastSharedAt

`func (o *RoutesV3SharedResourceWithMetadata) HasLastSharedAt() bool`

HasLastSharedAt returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3SharedResourceWithMetadata) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3SharedResourceWithMetadata) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3SharedResourceWithMetadata) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3SharedResourceWithMetadata) HasName() bool`

HasName returns a boolean if a field has been set.

### GetResourceId

`func (o *RoutesV3SharedResourceWithMetadata) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *RoutesV3SharedResourceWithMetadata) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *RoutesV3SharedResourceWithMetadata) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *RoutesV3SharedResourceWithMetadata) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetResourceMetadata

`func (o *RoutesV3SharedResourceWithMetadata) GetResourceMetadata() RoutesResourceMetadata`

GetResourceMetadata returns the ResourceMetadata field if non-nil, zero value otherwise.

### GetResourceMetadataOk

`func (o *RoutesV3SharedResourceWithMetadata) GetResourceMetadataOk() (*RoutesResourceMetadata, bool)`

GetResourceMetadataOk returns a tuple with the ResourceMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceMetadata

`func (o *RoutesV3SharedResourceWithMetadata) SetResourceMetadata(v RoutesResourceMetadata)`

SetResourceMetadata sets ResourceMetadata field to given value.

### HasResourceMetadata

`func (o *RoutesV3SharedResourceWithMetadata) HasResourceMetadata() bool`

HasResourceMetadata returns a boolean if a field has been set.

### GetResourceType

`func (o *RoutesV3SharedResourceWithMetadata) GetResourceType() string`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *RoutesV3SharedResourceWithMetadata) GetResourceTypeOk() (*string, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *RoutesV3SharedResourceWithMetadata) SetResourceType(v string)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *RoutesV3SharedResourceWithMetadata) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.

### GetShareWithAllNewChildren

`func (o *RoutesV3SharedResourceWithMetadata) GetShareWithAllNewChildren() bool`

GetShareWithAllNewChildren returns the ShareWithAllNewChildren field if non-nil, zero value otherwise.

### GetShareWithAllNewChildrenOk

`func (o *RoutesV3SharedResourceWithMetadata) GetShareWithAllNewChildrenOk() (*bool, bool)`

GetShareWithAllNewChildrenOk returns a tuple with the ShareWithAllNewChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareWithAllNewChildren

`func (o *RoutesV3SharedResourceWithMetadata) SetShareWithAllNewChildren(v bool)`

SetShareWithAllNewChildren sets ShareWithAllNewChildren field to given value.

### HasShareWithAllNewChildren

`func (o *RoutesV3SharedResourceWithMetadata) HasShareWithAllNewChildren() bool`

HasShareWithAllNewChildren returns a boolean if a field has been set.

### GetSubType

`func (o *RoutesV3SharedResourceWithMetadata) GetSubType() string`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *RoutesV3SharedResourceWithMetadata) GetSubTypeOk() (*string, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *RoutesV3SharedResourceWithMetadata) SetSubType(v string)`

SetSubType sets SubType field to given value.

### HasSubType

`func (o *RoutesV3SharedResourceWithMetadata) HasSubType() bool`

HasSubType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


