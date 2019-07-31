using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Caden : MonoBehaviour
{

    private Rigidbody rb3d;
    public float speed;
    void Start()
    {
        rb3d = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");
        rb3d.AddForce(new Vector3(moveVertical, 0, -moveHorizontal));
        
        /*
        if (Input.GetKey(KeyCode.W))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(1, 0, 0);
        }
        if (Input.GetKey(KeyCode.S))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(-1, 0, 0);
        }
        if (Input.GetKey(KeyCode.A))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, 0, 1);
        }
        if (Input.GetKey(KeyCode.D))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, 0, -1);
        }
        if (Input.GetKey(KeyCode.E))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, 1, 0);
        }
        if (Input.GetKey(KeyCode.Q))
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, -1, 0);
        }*/
    }
}
