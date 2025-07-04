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

from monad.models.routes_add_user_to_organization_request import RoutesAddUserToOrganizationRequest

class TestRoutesAddUserToOrganizationRequest(unittest.TestCase):
    """RoutesAddUserToOrganizationRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesAddUserToOrganizationRequest:
        """Test RoutesAddUserToOrganizationRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesAddUserToOrganizationRequest`
        """
        model = RoutesAddUserToOrganizationRequest()
        if include_optional:
            return RoutesAddUserToOrganizationRequest(
                role_id = '',
                user_id = ''
            )
        else:
            return RoutesAddUserToOrganizationRequest(
                role_id = '',
                user_id = '',
        )
        """

    def testRoutesAddUserToOrganizationRequest(self):
        """Test RoutesAddUserToOrganizationRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
