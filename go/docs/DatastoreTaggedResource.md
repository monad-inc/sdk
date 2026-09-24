# DatastoreTaggedResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Kind** | Pointer to [**DatastoreResourceKind**](DatastoreResourceKind.md) |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** | connector sub_type; empty for pipelines | [optional] 

## Methods

### NewDatastoreTaggedResource

`func NewDatastoreTaggedResource() *DatastoreTaggedResource`

NewDatastoreTaggedResource instantiates a new DatastoreTaggedResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatastoreTaggedResourceWithDefaults

`func NewDatastoreTaggedResourceWithDefaults() *DatastoreTaggedResource`

NewDatastoreTaggedResourceWithDefaults instantiates a new DatastoreTaggedResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DatastoreTaggedResource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DatastoreTaggedResource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DatastoreTaggedResource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DatastoreTaggedResource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetKind

`func (o *DatastoreTaggedResource) GetKind() DatastoreResourceKind`

GetKind returns the Kind field if non-nil, zero value otherwise.

### GetKindOk

`func (o *DatastoreTaggedResource) GetKindOk() (*DatastoreResourceKind, bool)`

GetKindOk returns a tuple with the Kind field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKind

`func (o *DatastoreTaggedResource) SetKind(v DatastoreResourceKind)`

SetKind sets Kind field to given value.

### HasKind

`func (o *DatastoreTaggedResource) HasKind() bool`

HasKind returns a boolean if a field has been set.

### GetName

`func (o *DatastoreTaggedResource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DatastoreTaggedResource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DatastoreTaggedResource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DatastoreTaggedResource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *DatastoreTaggedResource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DatastoreTaggedResource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DatastoreTaggedResource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DatastoreTaggedResource) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


