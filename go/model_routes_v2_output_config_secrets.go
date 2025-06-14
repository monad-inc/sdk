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
	"fmt"
	"gopkg.in/validator.v2"
)

// RoutesV2OutputConfigSecrets - struct for RoutesV2OutputConfigSecrets
type RoutesV2OutputConfigSecrets struct {
	BigquerySecretsConfig *BigquerySecretsConfig
	CriblHttpSecretsConfig *CriblHttpSecretsConfig
	ElasticsearchSecretsConfig *ElasticsearchSecretsConfig
	HttpSecretsConfig *HttpSecretsConfig
	NextGenSiemSecretsConfig *NextGenSiemSecretsConfig
	OpensearchSecretsConfig *OpensearchSecretsConfig
	PostgresqlSecretsConfig *PostgresqlSecretsConfig
	SentinelSecretsConfig *SentinelSecretsConfig
	SnowflakeOutputSecretsConfig *SnowflakeOutputSecretsConfig
	SplunkSecretsConfig *SplunkSecretsConfig
	SumologicSecretsConfig *SumologicSecretsConfig
	MapmapOfStringAny *map[string]interface{}
}

// BigquerySecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns BigquerySecretsConfig wrapped in RoutesV2OutputConfigSecrets
func BigquerySecretsConfigAsRoutesV2OutputConfigSecrets(v *BigquerySecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		BigquerySecretsConfig: v,
	}
}

// CriblHttpSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns CriblHttpSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func CriblHttpSecretsConfigAsRoutesV2OutputConfigSecrets(v *CriblHttpSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		CriblHttpSecretsConfig: v,
	}
}

// ElasticsearchSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns ElasticsearchSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func ElasticsearchSecretsConfigAsRoutesV2OutputConfigSecrets(v *ElasticsearchSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		ElasticsearchSecretsConfig: v,
	}
}

// HttpSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns HttpSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func HttpSecretsConfigAsRoutesV2OutputConfigSecrets(v *HttpSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		HttpSecretsConfig: v,
	}
}

// NextGenSiemSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns NextGenSiemSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func NextGenSiemSecretsConfigAsRoutesV2OutputConfigSecrets(v *NextGenSiemSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		NextGenSiemSecretsConfig: v,
	}
}

// OpensearchSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns OpensearchSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func OpensearchSecretsConfigAsRoutesV2OutputConfigSecrets(v *OpensearchSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		OpensearchSecretsConfig: v,
	}
}

// PostgresqlSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns PostgresqlSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func PostgresqlSecretsConfigAsRoutesV2OutputConfigSecrets(v *PostgresqlSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		PostgresqlSecretsConfig: v,
	}
}

// SentinelSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns SentinelSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func SentinelSecretsConfigAsRoutesV2OutputConfigSecrets(v *SentinelSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		SentinelSecretsConfig: v,
	}
}

// SnowflakeOutputSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns SnowflakeOutputSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func SnowflakeOutputSecretsConfigAsRoutesV2OutputConfigSecrets(v *SnowflakeOutputSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		SnowflakeOutputSecretsConfig: v,
	}
}

// SplunkSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns SplunkSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func SplunkSecretsConfigAsRoutesV2OutputConfigSecrets(v *SplunkSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		SplunkSecretsConfig: v,
	}
}

// SumologicSecretsConfigAsRoutesV2OutputConfigSecrets is a convenience function that returns SumologicSecretsConfig wrapped in RoutesV2OutputConfigSecrets
func SumologicSecretsConfigAsRoutesV2OutputConfigSecrets(v *SumologicSecretsConfig) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		SumologicSecretsConfig: v,
	}
}

// map[string]interface{}AsRoutesV2OutputConfigSecrets is a convenience function that returns map[string]interface{} wrapped in RoutesV2OutputConfigSecrets
func MapmapOfStringAnyAsRoutesV2OutputConfigSecrets(v *map[string]interface{}) RoutesV2OutputConfigSecrets {
	return RoutesV2OutputConfigSecrets{
		MapmapOfStringAny: v,
	}
}


// Unmarshal JSON data into one of the pointers in the struct
func (dst *RoutesV2OutputConfigSecrets) UnmarshalJSON(data []byte) error {
	var err error
	match := 0
	// try to unmarshal data into BigquerySecretsConfig
	err = newStrictDecoder(data).Decode(&dst.BigquerySecretsConfig)
	if err == nil {
		jsonBigquerySecretsConfig, _ := json.Marshal(dst.BigquerySecretsConfig)
		if string(jsonBigquerySecretsConfig) == "{}" { // empty struct
			dst.BigquerySecretsConfig = nil
		} else {
			if err = validator.Validate(dst.BigquerySecretsConfig); err != nil {
				dst.BigquerySecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.BigquerySecretsConfig = nil
	}

	// try to unmarshal data into CriblHttpSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.CriblHttpSecretsConfig)
	if err == nil {
		jsonCriblHttpSecretsConfig, _ := json.Marshal(dst.CriblHttpSecretsConfig)
		if string(jsonCriblHttpSecretsConfig) == "{}" { // empty struct
			dst.CriblHttpSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.CriblHttpSecretsConfig); err != nil {
				dst.CriblHttpSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.CriblHttpSecretsConfig = nil
	}

	// try to unmarshal data into ElasticsearchSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.ElasticsearchSecretsConfig)
	if err == nil {
		jsonElasticsearchSecretsConfig, _ := json.Marshal(dst.ElasticsearchSecretsConfig)
		if string(jsonElasticsearchSecretsConfig) == "{}" { // empty struct
			dst.ElasticsearchSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.ElasticsearchSecretsConfig); err != nil {
				dst.ElasticsearchSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.ElasticsearchSecretsConfig = nil
	}

	// try to unmarshal data into HttpSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.HttpSecretsConfig)
	if err == nil {
		jsonHttpSecretsConfig, _ := json.Marshal(dst.HttpSecretsConfig)
		if string(jsonHttpSecretsConfig) == "{}" { // empty struct
			dst.HttpSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.HttpSecretsConfig); err != nil {
				dst.HttpSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.HttpSecretsConfig = nil
	}

	// try to unmarshal data into NextGenSiemSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.NextGenSiemSecretsConfig)
	if err == nil {
		jsonNextGenSiemSecretsConfig, _ := json.Marshal(dst.NextGenSiemSecretsConfig)
		if string(jsonNextGenSiemSecretsConfig) == "{}" { // empty struct
			dst.NextGenSiemSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.NextGenSiemSecretsConfig); err != nil {
				dst.NextGenSiemSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.NextGenSiemSecretsConfig = nil
	}

	// try to unmarshal data into OpensearchSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.OpensearchSecretsConfig)
	if err == nil {
		jsonOpensearchSecretsConfig, _ := json.Marshal(dst.OpensearchSecretsConfig)
		if string(jsonOpensearchSecretsConfig) == "{}" { // empty struct
			dst.OpensearchSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.OpensearchSecretsConfig); err != nil {
				dst.OpensearchSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.OpensearchSecretsConfig = nil
	}

	// try to unmarshal data into PostgresqlSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.PostgresqlSecretsConfig)
	if err == nil {
		jsonPostgresqlSecretsConfig, _ := json.Marshal(dst.PostgresqlSecretsConfig)
		if string(jsonPostgresqlSecretsConfig) == "{}" { // empty struct
			dst.PostgresqlSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.PostgresqlSecretsConfig); err != nil {
				dst.PostgresqlSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.PostgresqlSecretsConfig = nil
	}

	// try to unmarshal data into SentinelSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.SentinelSecretsConfig)
	if err == nil {
		jsonSentinelSecretsConfig, _ := json.Marshal(dst.SentinelSecretsConfig)
		if string(jsonSentinelSecretsConfig) == "{}" { // empty struct
			dst.SentinelSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.SentinelSecretsConfig); err != nil {
				dst.SentinelSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SentinelSecretsConfig = nil
	}

	// try to unmarshal data into SnowflakeOutputSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.SnowflakeOutputSecretsConfig)
	if err == nil {
		jsonSnowflakeOutputSecretsConfig, _ := json.Marshal(dst.SnowflakeOutputSecretsConfig)
		if string(jsonSnowflakeOutputSecretsConfig) == "{}" { // empty struct
			dst.SnowflakeOutputSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.SnowflakeOutputSecretsConfig); err != nil {
				dst.SnowflakeOutputSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SnowflakeOutputSecretsConfig = nil
	}

	// try to unmarshal data into SplunkSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.SplunkSecretsConfig)
	if err == nil {
		jsonSplunkSecretsConfig, _ := json.Marshal(dst.SplunkSecretsConfig)
		if string(jsonSplunkSecretsConfig) == "{}" { // empty struct
			dst.SplunkSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.SplunkSecretsConfig); err != nil {
				dst.SplunkSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SplunkSecretsConfig = nil
	}

	// try to unmarshal data into SumologicSecretsConfig
	err = newStrictDecoder(data).Decode(&dst.SumologicSecretsConfig)
	if err == nil {
		jsonSumologicSecretsConfig, _ := json.Marshal(dst.SumologicSecretsConfig)
		if string(jsonSumologicSecretsConfig) == "{}" { // empty struct
			dst.SumologicSecretsConfig = nil
		} else {
			if err = validator.Validate(dst.SumologicSecretsConfig); err != nil {
				dst.SumologicSecretsConfig = nil
			} else {
				match++
			}
		}
	} else {
		dst.SumologicSecretsConfig = nil
	}

	// try to unmarshal data into MapmapOfStringAny
	err = newStrictDecoder(data).Decode(&dst.MapmapOfStringAny)
	if err == nil {
		jsonMapmapOfStringAny, _ := json.Marshal(dst.MapmapOfStringAny)
		if string(jsonMapmapOfStringAny) == "{}" { // empty struct
			dst.MapmapOfStringAny = nil
		} else {
			if err = validator.Validate(dst.MapmapOfStringAny); err != nil {
				dst.MapmapOfStringAny = nil
			} else {
				match++
			}
		}
	} else {
		dst.MapmapOfStringAny = nil
	}

	if match > 1 { // more than 1 match
		// reset to nil
		dst.BigquerySecretsConfig = nil
		dst.CriblHttpSecretsConfig = nil
		dst.ElasticsearchSecretsConfig = nil
		dst.HttpSecretsConfig = nil
		dst.NextGenSiemSecretsConfig = nil
		dst.OpensearchSecretsConfig = nil
		dst.PostgresqlSecretsConfig = nil
		dst.SentinelSecretsConfig = nil
		dst.SnowflakeOutputSecretsConfig = nil
		dst.SplunkSecretsConfig = nil
		dst.SumologicSecretsConfig = nil
		dst.MapmapOfStringAny = nil

		return fmt.Errorf("data matches more than one schema in oneOf(RoutesV2OutputConfigSecrets)")
	} else if match == 1 {
		return nil // exactly one match
	} else { // no match
		return fmt.Errorf("data failed to match schemas in oneOf(RoutesV2OutputConfigSecrets)")
	}
}

// Marshal data from the first non-nil pointers in the struct to JSON
func (src RoutesV2OutputConfigSecrets) MarshalJSON() ([]byte, error) {
	if src.BigquerySecretsConfig != nil {
		return json.Marshal(&src.BigquerySecretsConfig)
	}

	if src.CriblHttpSecretsConfig != nil {
		return json.Marshal(&src.CriblHttpSecretsConfig)
	}

	if src.ElasticsearchSecretsConfig != nil {
		return json.Marshal(&src.ElasticsearchSecretsConfig)
	}

	if src.HttpSecretsConfig != nil {
		return json.Marshal(&src.HttpSecretsConfig)
	}

	if src.NextGenSiemSecretsConfig != nil {
		return json.Marshal(&src.NextGenSiemSecretsConfig)
	}

	if src.OpensearchSecretsConfig != nil {
		return json.Marshal(&src.OpensearchSecretsConfig)
	}

	if src.PostgresqlSecretsConfig != nil {
		return json.Marshal(&src.PostgresqlSecretsConfig)
	}

	if src.SentinelSecretsConfig != nil {
		return json.Marshal(&src.SentinelSecretsConfig)
	}

	if src.SnowflakeOutputSecretsConfig != nil {
		return json.Marshal(&src.SnowflakeOutputSecretsConfig)
	}

	if src.SplunkSecretsConfig != nil {
		return json.Marshal(&src.SplunkSecretsConfig)
	}

	if src.SumologicSecretsConfig != nil {
		return json.Marshal(&src.SumologicSecretsConfig)
	}

	if src.MapmapOfStringAny != nil {
		return json.Marshal(&src.MapmapOfStringAny)
	}

	return nil, nil // no data in oneOf schemas
}

// Get the actual instance
func (obj *RoutesV2OutputConfigSecrets) GetActualInstance() (interface{}) {
	if obj == nil {
		return nil
	}
	if obj.BigquerySecretsConfig != nil {
		return obj.BigquerySecretsConfig
	}

	if obj.CriblHttpSecretsConfig != nil {
		return obj.CriblHttpSecretsConfig
	}

	if obj.ElasticsearchSecretsConfig != nil {
		return obj.ElasticsearchSecretsConfig
	}

	if obj.HttpSecretsConfig != nil {
		return obj.HttpSecretsConfig
	}

	if obj.NextGenSiemSecretsConfig != nil {
		return obj.NextGenSiemSecretsConfig
	}

	if obj.OpensearchSecretsConfig != nil {
		return obj.OpensearchSecretsConfig
	}

	if obj.PostgresqlSecretsConfig != nil {
		return obj.PostgresqlSecretsConfig
	}

	if obj.SentinelSecretsConfig != nil {
		return obj.SentinelSecretsConfig
	}

	if obj.SnowflakeOutputSecretsConfig != nil {
		return obj.SnowflakeOutputSecretsConfig
	}

	if obj.SplunkSecretsConfig != nil {
		return obj.SplunkSecretsConfig
	}

	if obj.SumologicSecretsConfig != nil {
		return obj.SumologicSecretsConfig
	}

	if obj.MapmapOfStringAny != nil {
		return obj.MapmapOfStringAny
	}

	// all schemas are nil
	return nil
}

// Get the actual instance value
func (obj RoutesV2OutputConfigSecrets) GetActualInstanceValue() (interface{}) {
	if obj.BigquerySecretsConfig != nil {
		return *obj.BigquerySecretsConfig
	}

	if obj.CriblHttpSecretsConfig != nil {
		return *obj.CriblHttpSecretsConfig
	}

	if obj.ElasticsearchSecretsConfig != nil {
		return *obj.ElasticsearchSecretsConfig
	}

	if obj.HttpSecretsConfig != nil {
		return *obj.HttpSecretsConfig
	}

	if obj.NextGenSiemSecretsConfig != nil {
		return *obj.NextGenSiemSecretsConfig
	}

	if obj.OpensearchSecretsConfig != nil {
		return *obj.OpensearchSecretsConfig
	}

	if obj.PostgresqlSecretsConfig != nil {
		return *obj.PostgresqlSecretsConfig
	}

	if obj.SentinelSecretsConfig != nil {
		return *obj.SentinelSecretsConfig
	}

	if obj.SnowflakeOutputSecretsConfig != nil {
		return *obj.SnowflakeOutputSecretsConfig
	}

	if obj.SplunkSecretsConfig != nil {
		return *obj.SplunkSecretsConfig
	}

	if obj.SumologicSecretsConfig != nil {
		return *obj.SumologicSecretsConfig
	}

	if obj.MapmapOfStringAny != nil {
		return *obj.MapmapOfStringAny
	}

	// all schemas are nil
	return nil
}

type NullableRoutesV2OutputConfigSecrets struct {
	value *RoutesV2OutputConfigSecrets
	isSet bool
}

func (v NullableRoutesV2OutputConfigSecrets) Get() *RoutesV2OutputConfigSecrets {
	return v.value
}

func (v *NullableRoutesV2OutputConfigSecrets) Set(val *RoutesV2OutputConfigSecrets) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutesV2OutputConfigSecrets) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutesV2OutputConfigSecrets) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutesV2OutputConfigSecrets(val *RoutesV2OutputConfigSecrets) *NullableRoutesV2OutputConfigSecrets {
	return &NullableRoutesV2OutputConfigSecrets{value: val, isSet: true}
}

func (v NullableRoutesV2OutputConfigSecrets) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutesV2OutputConfigSecrets) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


