# RoutesRetryQueueMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **string** |  | [optional] 
**Data** | Pointer to **map[string]interface{}** |  | [optional] 
**DataBytes** | Pointer to **int32** | DataBytes is the payload size in bytes. Omitted is set when the payload was left out for exceeding maxRetryRecordBytes. (meta_only leaves out every payload without setting Omitted — it isn&#39;t a size decision.) | [optional] 
**EligibleAt** | Pointer to **string** | EligibleAt is a rough estimate of the earliest retry time (see estEligibleAt), not an authoritative floor — it under-estimates output/enrichment nodes. | [optional] 
**ErrorNodeId** | Pointer to **string** |  | [optional] 
**LastError** | Pointer to **string** |  | [optional] 
**LastSeenAt** | Pointer to **string** |  | [optional] 
**Omitted** | Pointer to **bool** |  | [optional] 
**RetryCount** | Pointer to **int32** |  | [optional] 
**StreamSeq** | Pointer to **int32** |  | [optional] 

## Methods

### NewRoutesRetryQueueMessage

`func NewRoutesRetryQueueMessage() *RoutesRetryQueueMessage`

NewRoutesRetryQueueMessage instantiates a new RoutesRetryQueueMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesRetryQueueMessageWithDefaults

`func NewRoutesRetryQueueMessageWithDefaults() *RoutesRetryQueueMessage`

NewRoutesRetryQueueMessageWithDefaults instantiates a new RoutesRetryQueueMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *RoutesRetryQueueMessage) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RoutesRetryQueueMessage) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RoutesRetryQueueMessage) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RoutesRetryQueueMessage) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetData

`func (o *RoutesRetryQueueMessage) GetData() map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *RoutesRetryQueueMessage) GetDataOk() (*map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *RoutesRetryQueueMessage) SetData(v map[string]interface{})`

SetData sets Data field to given value.

### HasData

`func (o *RoutesRetryQueueMessage) HasData() bool`

HasData returns a boolean if a field has been set.

### GetDataBytes

`func (o *RoutesRetryQueueMessage) GetDataBytes() int32`

GetDataBytes returns the DataBytes field if non-nil, zero value otherwise.

### GetDataBytesOk

`func (o *RoutesRetryQueueMessage) GetDataBytesOk() (*int32, bool)`

GetDataBytesOk returns a tuple with the DataBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataBytes

`func (o *RoutesRetryQueueMessage) SetDataBytes(v int32)`

SetDataBytes sets DataBytes field to given value.

### HasDataBytes

`func (o *RoutesRetryQueueMessage) HasDataBytes() bool`

HasDataBytes returns a boolean if a field has been set.

### GetEligibleAt

`func (o *RoutesRetryQueueMessage) GetEligibleAt() string`

GetEligibleAt returns the EligibleAt field if non-nil, zero value otherwise.

### GetEligibleAtOk

`func (o *RoutesRetryQueueMessage) GetEligibleAtOk() (*string, bool)`

GetEligibleAtOk returns a tuple with the EligibleAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEligibleAt

`func (o *RoutesRetryQueueMessage) SetEligibleAt(v string)`

SetEligibleAt sets EligibleAt field to given value.

### HasEligibleAt

`func (o *RoutesRetryQueueMessage) HasEligibleAt() bool`

HasEligibleAt returns a boolean if a field has been set.

### GetErrorNodeId

`func (o *RoutesRetryQueueMessage) GetErrorNodeId() string`

GetErrorNodeId returns the ErrorNodeId field if non-nil, zero value otherwise.

### GetErrorNodeIdOk

`func (o *RoutesRetryQueueMessage) GetErrorNodeIdOk() (*string, bool)`

GetErrorNodeIdOk returns a tuple with the ErrorNodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorNodeId

`func (o *RoutesRetryQueueMessage) SetErrorNodeId(v string)`

SetErrorNodeId sets ErrorNodeId field to given value.

### HasErrorNodeId

`func (o *RoutesRetryQueueMessage) HasErrorNodeId() bool`

HasErrorNodeId returns a boolean if a field has been set.

### GetLastError

`func (o *RoutesRetryQueueMessage) GetLastError() string`

GetLastError returns the LastError field if non-nil, zero value otherwise.

### GetLastErrorOk

`func (o *RoutesRetryQueueMessage) GetLastErrorOk() (*string, bool)`

GetLastErrorOk returns a tuple with the LastError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastError

`func (o *RoutesRetryQueueMessage) SetLastError(v string)`

SetLastError sets LastError field to given value.

### HasLastError

`func (o *RoutesRetryQueueMessage) HasLastError() bool`

HasLastError returns a boolean if a field has been set.

### GetLastSeenAt

`func (o *RoutesRetryQueueMessage) GetLastSeenAt() string`

GetLastSeenAt returns the LastSeenAt field if non-nil, zero value otherwise.

### GetLastSeenAtOk

`func (o *RoutesRetryQueueMessage) GetLastSeenAtOk() (*string, bool)`

GetLastSeenAtOk returns a tuple with the LastSeenAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSeenAt

`func (o *RoutesRetryQueueMessage) SetLastSeenAt(v string)`

SetLastSeenAt sets LastSeenAt field to given value.

### HasLastSeenAt

`func (o *RoutesRetryQueueMessage) HasLastSeenAt() bool`

HasLastSeenAt returns a boolean if a field has been set.

### GetOmitted

`func (o *RoutesRetryQueueMessage) GetOmitted() bool`

GetOmitted returns the Omitted field if non-nil, zero value otherwise.

### GetOmittedOk

`func (o *RoutesRetryQueueMessage) GetOmittedOk() (*bool, bool)`

GetOmittedOk returns a tuple with the Omitted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOmitted

`func (o *RoutesRetryQueueMessage) SetOmitted(v bool)`

SetOmitted sets Omitted field to given value.

### HasOmitted

`func (o *RoutesRetryQueueMessage) HasOmitted() bool`

HasOmitted returns a boolean if a field has been set.

### GetRetryCount

`func (o *RoutesRetryQueueMessage) GetRetryCount() int32`

GetRetryCount returns the RetryCount field if non-nil, zero value otherwise.

### GetRetryCountOk

`func (o *RoutesRetryQueueMessage) GetRetryCountOk() (*int32, bool)`

GetRetryCountOk returns a tuple with the RetryCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryCount

`func (o *RoutesRetryQueueMessage) SetRetryCount(v int32)`

SetRetryCount sets RetryCount field to given value.

### HasRetryCount

`func (o *RoutesRetryQueueMessage) HasRetryCount() bool`

HasRetryCount returns a boolean if a field has been set.

### GetStreamSeq

`func (o *RoutesRetryQueueMessage) GetStreamSeq() int32`

GetStreamSeq returns the StreamSeq field if non-nil, zero value otherwise.

### GetStreamSeqOk

`func (o *RoutesRetryQueueMessage) GetStreamSeqOk() (*int32, bool)`

GetStreamSeqOk returns a tuple with the StreamSeq field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamSeq

`func (o *RoutesRetryQueueMessage) SetStreamSeq(v int32)`

SetStreamSeq sets StreamSeq field to given value.

### HasStreamSeq

`func (o *RoutesRetryQueueMessage) HasStreamSeq() bool`

HasStreamSeq returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


