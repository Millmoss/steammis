using System.Collections;
using System.Collections.Generic;
using UnityEngine;

    

public class RedBoxMove : MonoBehaviour
{
    public GameObject box;

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.W))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(-0.5f, 0, 0);
        }
    }
}
