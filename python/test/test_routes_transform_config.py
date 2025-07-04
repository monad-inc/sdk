# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.routes_transform_config import RoutesTransformConfig

class TestRoutesTransformConfig(unittest.TestCase):
    """RoutesTransformConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesTransformConfig:
        """Test RoutesTransformConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesTransformConfig`
        """
        model = RoutesTransformConfig()
        if include_optional:
            return RoutesTransformConfig(
                operations = [
                    monad.models.routes/transform_operation.routes.TransformOperation(
                        arguments = {
                            'key' : null
                            }, 
                        operation = '', )
                    ]
            )
        else:
            return RoutesTransformConfig(
        )
        """

    def testRoutesTransformConfig(self):
        """Test RoutesTransformConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
