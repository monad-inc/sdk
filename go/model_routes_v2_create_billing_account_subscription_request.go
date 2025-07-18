/*
Monad API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the RoutesV2CreateBillingAccountSubscriptionRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutesV2CreateBillingAccountSubscriptionRequest{}

// RoutesV2CreateBillingAccountSubscriptionRequest struct for RoutesV2CreateBillingAccountSubscriptionRequest
type RoutesV2CreateBillingAccountSubscriptionRequest struct {
	// ProductID is the ID of the product to subscribe to
	ProductId string `json:"product_id"`
}

type _RoutesV2CreateBillingAccountSubscriptionRequest RoutesV2CreateBillingAccountSubscriptionRequest

// NewRoutesV2CreateBillingAccountSubscriptionRequest instantiates a new RoutesV2CreateBillingAccountSubscriptionRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutesV2CreateBillingAccountSubscriptionRequest(productId string) *RoutesV2CreateBillingAccountSubscriptionRequest {
	this := RoutesV2CreateBillingAccountSubscriptionRequest{}
	this.ProductId = productId
	return &this
}

// NewRoutesV2CreateBillingAccountSubscriptionRequestWithDefaults instantiates a new RoutesV2CreateBillingAccountSubscriptionRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutesV2CreateBillingAccountSubscriptionRequestWithDefaults() *RoutesV2CreateBillingAccountSubscriptionRequest {
	this := RoutesV2CreateBillingAccountSubscriptionRequest{}
	return &this
}

// GetProductId returns the ProductId field value
func (o *RoutesV2CreateBillingAccountSubscriptionRequest) GetProductId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ProductId
}

// GetProductIdOk returns a tuple with the ProductId field value
// and a boolean to check if the value has been set.
func (o *RoutesV2CreateBillingAccountSubscriptionRequest) GetProductIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ProductId, true
}

// SetProductId sets field value
func (o *RoutesV2CreateBillingAccountSubscriptionRequest) SetProductId(v string) {
	o.ProductId = v
}

func (o RoutesV2CreateBillingAccountSubscriptionRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutesV2CreateBillingAccountSubscriptionRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["product_id"] = o.ProductId
	return toSerialize, nil
}

func (o *RoutesV2CreateBillingAccountSubscriptionRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"product_id",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varRoutesV2CreateBillingAccountSubscriptionRequest := _RoutesV2CreateBillingAccountSubscriptionRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varRoutesV2CreateBillingAccountSubscriptionRequest)

	if err != nil {
		return err
	}

	*o = RoutesV2CreateBillingAccountSubscriptionRequest(varRoutesV2CreateBillingAccountSubscriptionRequest)

	return err
}

type NullableRoutesV2CreateBillingAccountSubscriptionRequest struct {
	value *RoutesV2CreateBillingAccountSubscriptionRequest
	isSet bool
}

func (v NullableRoutesV2CreateBillingAccountSubscriptionRequest) Get() *RoutesV2CreateBillingAccountSubscriptionRequest {
	return v.value
}

func (v *NullableRoutesV2CreateBillingAccountSubscriptionRequest) Set(val *RoutesV2CreateBillingAccountSubscriptionRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutesV2CreateBillingAccountSubscriptionRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutesV2CreateBillingAccountSubscriptionRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutesV2CreateBillingAccountSubscriptionRequest(val *RoutesV2CreateBillingAccountSubscriptionRequest) *NullableRoutesV2CreateBillingAccountSubscriptionRequest {
	return &NullableRoutesV2CreateBillingAccountSubscriptionRequest{value: val, isSet: true}
}

func (v NullableRoutesV2CreateBillingAccountSubscriptionRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutesV2CreateBillingAccountSubscriptionRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


