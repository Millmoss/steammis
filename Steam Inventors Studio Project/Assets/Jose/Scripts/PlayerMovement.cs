using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public int speed = 1;
   // char m_KeyUsed;
   // bool m_PressedKey;


    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.S))
        {
            gameObject.transform.position = gameObject.transform.position - new Vector3(0, 0, Time.deltaTime) * speed;
        }
        else if (Input.GetKey(KeyCode.W)) //d
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(0, 0, Time.deltaTime) * speed;
        }
        else if (Input.GetKey(KeyCode.D)) //w
        {
            gameObject.transform.position = gameObject.transform.position + new Vector3(Time.deltaTime, 0, 0) * speed;
        }
        else if (Input.GetKey(KeyCode.A)) //s
        {
            gameObject.transform.position = gameObject.transform.position - new Vector3(Time.deltaTime, 0, 0) * speed;
        } 
        
        /*switch()
        {

        }*/
    }
}
