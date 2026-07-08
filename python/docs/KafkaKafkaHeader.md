# KafkaKafkaHeader


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from monad.models.kafka_kafka_header import KafkaKafkaHeader

# TODO update the JSON string below
json = "{}"
# create an instance of KafkaKafkaHeader from a JSON string
kafka_kafka_header_instance = KafkaKafkaHeader.from_json(json)
# print the JSON string representation of the object
print(KafkaKafkaHeader.to_json())

# convert the object into a dict
kafka_kafka_header_dict = kafka_kafka_header_instance.to_dict()
# create an instance of KafkaKafkaHeader from a dict
kafka_kafka_header_from_dict = KafkaKafkaHeader.from_dict(kafka_kafka_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


